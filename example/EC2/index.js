/*******************************************************************
Copyright 2013 Holiday Extras

This file is part of wsdl2.js

wsdl2.js is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

wsdl2.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with wsdl2.js.  If not, see <http://www.gnu.org/licenses/>.
*******************************************************************/
var fs = require('fs');
var parser = require('xml2json');
var request = require('request');
var models = { };
var serviceDefinition = { };
var Modeler = require('./Modeler.js');

var coreSettings = {
  debugSoap: false,
  benchmark: true,
  createMock: false,
  useMock: false,
  modeler: Modeler.Settings
};

function jsonToXml(data, name) {
  name = name || "root";
  if (data == undefined) return "";
  if (data instanceof Array) {
    var result = "";
    for (var i=0; i<data.length; i++) {
      result += "<"+name+">"+jsonToXml(data[i], name)+"</"+name+">";
    }
    return result;
  } else if (data instanceof Date) {
    return (data).toJSON().substring(0,10)
  } else if (data instanceof Object) {
    var keys = Object.keys(data);
    var result = "";
    for (var i=0; i<keys.length; i++) {
      var childTxt = jsonToXml(data[keys[i]], keys[i]);
      if (childTxt != "") {
        if (!(data[keys[i]] instanceof Array)) {
          result += "<"+keys[i]+">"+childTxt+"</"+keys[i]+">";
        } else {
          result += childTxt;
        }
      }
    }
    return result;
  } else {
    return (data).toString();
  }
};

function saveMock(method, response) {
  fs.writeFile(__dirname+'/Mocks/'+method+".js", response, function (err) { });
};

function loadMock(method, callback) {
  fs.readFile(__dirname+'/Mocks/'+method+".js", callback);
};

function handleSoapResponse(method, outputModel, startTime, err, body, callback) {
  if (coreSettings.benchmark) console.log("SOAP", method, "took:", (new Date())-startTime);
  if (coreSettings.debugSoap) console.log("Error:", err);
  if (coreSettings.debugSoap) console.log("Response:", body);
  if (err) {
    return callback(err, null);
  }
  if (coreSettings.createMock) saveMock(method, body);
  var json = {};
  try {
    json = JSON.parse(parser.toJson(body));
    if (coreSettings.debugSoap) console.log("JSON Response:", JSON.stringify(json, null, 2));
    json = json['soap:Envelope']['soap:Body'][method+"Response"];
    if (json == undefined) return callback("Invalid response to "+method);
    obj = new models[outputModel](json);
    if (coreSettings.debugSoap) console.log("Output:", JSON.stringify(json, null, 2));
    
    obj.debug = function() {
      console.log("----", method+" Response", "----");
      console.log("XML: ", body);
      console.log("JSON:", JSON.stringify(json, null, 2));
      console.log("Modeled:", JSON.stringify(obj, null, 2));
      console.log("Validates:", obj.validate());
      console.log("------------------------");
    };
    Object.defineProperty(obj, "debug", { enumerable: false });
    Object.preventExtensions(this);
  } catch (err) {
    return callback(err, null);
  }
  return callback(null, obj);
};

function doSoapRequest(url, method, soapAction, data, inputModel, outputModel, ns, callback) {
  if (!data.validate()) return callback("Input model failed to validate!");
  var headers = {
    'Content-Type': 'application/soap+xml; charset=utf-8',
    'SOAPAction': '"'+soapAction+'"'
  };
  
  var startTime;
  var soapBody = '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
                   '<soap:Body>' +
                     '<'+method+' xmlns="'+ns+'">'+
                       jsonToXml(data) +
                     '</'+method+'>' +
                   '</soap:Body>' +
                 '</soap:Envelope>';

  var soapRequest = {
    url: url, 
    headers: headers,
    body: soapBody,
    timeout: 15000
  };
  
  if (coreSettings.debugSoap) console.log("\n####", method, "Request ####");
  if (coreSettings.debugSoap) console.log("Input:", JSON.stringify(data, null, 2));
  if (coreSettings.debugSoap) console.log("Request:", JSON.stringify(soapRequest, null, 2));
  if (coreSettings.benchmark) startTime = new Date();
  if (!coreSettings.useMock) {
    request.post(soapRequest, function (err, response, body) {
      handleSoapResponse(method, outputModel, startTime, err, body, callback)
    });
  } else {
    loadMock(method, function(err, body) {
      handleSoapResponse(method, outputModel, startTime, err, body, callback)
    });
  }
};


function SoapService() {
  var self = this;
  self.Types = { };
  self.Elements = { };
  self.Settings = coreSettings;
  
  // load all the service models
  var includeList = fs.readdirSync(__dirname+"/Element");
  includeList.forEach(function(fileName) {
    if (/\.js$/.test(fileName)) {
      fileName = fileName.substring(0, fileName.length-3);
      models["Element"+fileName] = require('./Element/' + fileName);
      self.Elements[fileName] = require('./Element/' + fileName);
    }
  });
  var includeList = fs.readdirSync(__dirname+"/Type");
  includeList.forEach(function(fileName) {
    if (/\.js$/.test(fileName)) {
      fileName = fileName.substring(0, fileName.length-3);
      models["Type"+fileName] = require('./Type/' + fileName);
      self.Types[fileName] = require('./Type/' + fileName);
    }
  });
  
  // load the service definitions
  serviceDefinition = require("./ServiceDefinition.js");
  
  //create the wrappers
  for (var someServiceName in serviceDefinition) {
    var tmpObj = { };
    self[someServiceName] = tmpObj;
    (function createService(name, properties, parent) {
      var url = ""+properties.serviceUrl;
      var namespace = ""+properties.namespace;
      delete properties.serviceUrl;
      delete properties.namespace;
      for (var someFunction in properties) {
        (function createFunction(functionName, properties) {
          parent[properties.input.replace("Element", "")] = function(json) {
            var newObject = new models[properties.input](json, this);
            this.request = function(callback) {
              doSoapRequest(url, functionName, properties.soapAction, this, 
                          properties.input, properties.output, namespace, callback);
            };
            Object.defineProperty(this, "request", { enumerable: false });
            this.preview = function() {
              return "<"+functionName+">"+jsonToXml(this)+"</"+functionName+">";
            };
            Object.defineProperty(this, "preview", { enumerable: false });
            this.debug = function() {
              console.log("----", functionName+" Request", "----");
              console.log("JSON:", JSON.stringify(this, null, 2));
              console.log("XML: ", this.preview());
              console.log("Validates:", this.validate());
              console.log("------------------------");
            };
            Object.defineProperty(this, "debug", { enumerable: false });
            Object.preventExtensions(this);
          };
        })(someFunction, properties[someFunction]);
      }
    })(someServiceName, serviceDefinition[someServiceName], tmpObj);
  }
  
};

module.exports = new SoapService();

