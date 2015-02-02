#!/usr/bin/env node
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
var Modeler = require("./lib/Modeler.js");
var parser = require('xml2json');
var fs = require('fs');
var minimist = require('minimist');

var typeMap = { };
var ns = { };
var services = { };
var bindings = { };
var messages = { };
var portTypes = { };
var xmlCache = {
  elements: { },
  complexTypes: { },
  simpleTypes: { }
};
var contentTypeHeaders = {
  '1.1': 'text/xml; charset=utf-8',
  '1.2': 'application/soap+xml; charset=utf-8'
};

var argv = minimist(process.argv.slice(2));
var serviceName = argv._[0];
var pathToWsdl = argv._[1];
var soapVersion = (argv['soap-version'] || '1.2').toString();
var keepEmptyTags = argv['keep-empty-tags'] ? true : false;

if(Object.keys(contentTypeHeaders).indexOf(soapVersion) === -1) {
  process.stdout.write('invalid --soap-version option, expected one of ' + Object.keys(contentTypeHeaders).join(', ') + '\n');
  process.exit(1);
}

if(!(serviceName && pathToWsdl)) {
  process.stdout.write('usage: wsdl2.js [serviceName] [/local/path/to/wsdl]\n');
  process.exit(1);
}

try {
  var xmlWsdlDefinition = fs.readFileSync(pathToWsdl);
} catch(e) {
  process.stdout.write(pathToWsdl + ' could not be opened\n');
  process.exit(1);
}

try {
  fs.mkdirSync(process.cwd()+"/"+serviceName);
} catch(e) { }
try {
  fs.mkdirSync(process.cwd()+"/"+serviceName+"/Type");
} catch(e) { }
try {
  fs.mkdirSync(process.cwd()+"/"+serviceName+"/Element");
} catch(e) { }
try {
  fs.mkdirSync(process.cwd()+"/"+serviceName+"/Mocks");
} catch(e) { }

var classTemplate = fs.readFileSync(__dirname+'/lib/classTemplate.js');
var json = JSON.parse(parser.toJson(xmlWsdlDefinition));
processWSDL(json);

function stripNamespace(t) {
  if (t.match(":")) {
    return t.split(":")[1];
  }
  return t;
};

function processWSDL(json) {
  findNamespaces(json);
  processServices(json);
  processMessages(json);
  processPortTypes(json);
  processBindings(json);
  processTypes(json);

  var serviceDefinition = "module.exports = "+JSON.stringify(services,null,2);
  fs.writeFile(process.cwd()+"/"+serviceName+'/ServiceDefinition.js', serviceDefinition);

  var modelerFile = fs.readFileSync(__dirname+"/lib/Modeler.js");
  fs.writeFile(process.cwd()+"/"+serviceName+'/Modeler.js', modelerFile);

  var indexFile = fs.readFileSync(__dirname+"/lib/serviceProvider.js", 'utf8');
  indexFile = indexFile.replace("###1###", contentTypeHeaders[soapVersion]);
  indexFile = indexFile.replace('###2###', keepEmptyTags);
  fs.writeFile(process.cwd()+"/"+serviceName+'/index.js', indexFile);
};

/*****************************************
<wsdl:definitions xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:mime="http://schemas.xmlsoap.org/wsdl/mime/" xmlns:tns="http://firemelon.com/webservices/" xmlns:s1="http://microsoft.com/wsdl/types/" xmlns:s="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://schemas.xmlsoap.org/wsdl/soap12/" xmlns:http="http://schemas.xmlsoap.org/wsdl/http/" targetNamespace="http://firemelon.com/webservices/" xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/">
*****************************************/
function findNamespaces(json) {
  var mapping = {
    'http://schemas.xmlsoap.org/wsdl/soap/': 'soap',
    'http://schemas.xmlsoap.org/wsdl/': 'wsdl',
    'http://schemas.xmlsoap.org/wsdl/http/': 'http',
    'http://www.w3.org/2001/XMLSchema': 'xsd'
  };
  var wsdlDefinitions = json[Object.keys(json)[0]];

  for (var someAttr in wsdlDefinitions) {
    if (mapping.hasOwnProperty(wsdlDefinitions[someAttr])) {
      ns[mapping[wsdlDefinitions[someAttr]]] = (someAttr.split(":").concat([""]))[1]+":";
    }
  };

  if (!ns.hasOwnProperty('wsdl') || (ns['wsdl']==":")) ns['wsdl'] = "";

  typeMap[ns['xsd']+"string"] = "string";
  typeMap[ns['xsd']+"int"] = "number";
  typeMap[ns['xsd']+"boolean"] = "boolean";
  typeMap[ns['xsd']+"double"] = "number";
  typeMap[ns['xsd']+"decimal"] = "number";
  typeMap[ns['xsd']+"dateTime"] = "date";
  //console.log("Namespaces:", ns);
  //console.log("");
};

/******************************************
<wsdl:service name="Service">
  <wsdl:port name="ServiceSoap" binding="tns:ServiceSoap">
    <soap:address location="https://www.blahblah.com/blah/blah/service.asmx"/>
******************************************/
function processServices(json) {
  var wsdlDefinitions = json[ns['wsdl']+'definitions'];
  var wsdlServices = wsdlDefinitions[ns['wsdl']+'service'];
  if (!(wsdlServices instanceof Array)) wsdlServices = [wsdlServices];
  wsdlServices.forEach(function(someService) {
    var portTags = someService[ns['wsdl']+'port'];
    if (!(portTags instanceof Array)) portTags = [portTags];
    portTags.forEach(function(somePort) {
      if (somePort[ns['soap']+'address']) {
        services[somePort.name] = {
          binding: somePort.binding,
          namespace: wsdlDefinitions["xmlns:"+somePort.binding.split(":")[0]],
          serviceUrl: somePort[ns['soap']+'address'].location
        }
      }
    });
  });
  //console.log("Services:", JSON.stringify(services,null,2));
  //console.log("");
};

/******************************************
<wsdl:message name="SomeMessageName">
  <wsdl:part name="parameters" element="tns:SomeElementName"/>
</wsdl:message>
<wsdl:message name="SomeMessageName">
  <wsdl:part name="parameters" element="tns:SomeElementName"/>
</wsdl:message>
******************************************/
function processMessages(json) {
  var wsdlDefinitions = json[ns['wsdl']+'definitions'];
  var wsdlMessages = wsdlDefinitions[ns['wsdl']+'message'];
  if (!(wsdlMessages instanceof Array)) wsdlMessages = [wsdlMessages];
  wsdlMessages.forEach(function(someMessage) {
    // According to the W3 spec, messages can have multiple part's
    messages[someMessage.name] = [];
    var wsdlParts = someMessage[ns['wsdl']+'part'];
    if (wsdlParts != null) {
      if (!(wsdlParts instanceof Array)) wsdlParts = [wsdlParts];
      wsdlParts.forEach(function(somePart) {
        // According to the W3 spec, parts can have either element or type attributes
        // elements are found here: /wsdl:defintions/wsdl:types/s:schema/s:element
        // types are found here /wsdl:defintions/wsdl:types/s:schema/s:[complex/simple]Type
        if (somePart.element) messages[someMessage.name].push("Element"+stripNamespace(somePart.element));
        if (somePart.type) messages[someMessage.name].push("Type"+stripNamespace(somePart.type));
      });
    }
  });
  //console.log("Messages:", messages);
  //console.log("");
};


/******************************************
<wsdl:portType name="ServiceSoap">
  <wsdl:operation name="SomeOperationName">
    <wsdl:input message="tns:SomeMessageName"/>
    <wsdl:output message="tns:SomeMessageName"/>
******************************************/
function processPortTypes(json) {
  var wsdlDefinitions = json[ns['wsdl']+'definitions'];
  var wsdlPortTypes = wsdlDefinitions[ns['wsdl']+'portType'];
  if (!(wsdlPortTypes instanceof Array)) wsdlPortTypes = [wsdlPortTypes];
  wsdlPortTypes.forEach(function(somePortType) {
    portTypes[somePortType.name] = { };
    var wsdlOperations = somePortType[ns['wsdl']+'operation'];
    if (!(wsdlOperations instanceof Array)) wsdlOperations = [wsdlOperations];
    wsdlOperations.forEach(function(someOperation) {
      portTypes[somePortType.name][someOperation.name] = {
        input: stripNamespace(someOperation[ns['wsdl']+'input']['message']),
        output: stripNamespace(someOperation[ns['wsdl']+'output']['message']),
      };
    });
  });
  //console.log("PortTypes:", portTypes);
  //console.log("");
};


/******************************************
<wsdl:binding name="ServiceSoap" type="tns:ServiceSoap">
  <soap:binding transport="http://schemas.xmlsoap.org/soap/http"/>
  <http:binding verb="GET" />
  <wsdl:operation name="SomeOperationName">
    <soap:operation soapAction="http://blahblah.com/blah/blah" style="document"/>
      <wsdl:input>
        <soap:body use="literal"/>
      </wsdl:input>
      <wsdl:output>
        <soap:body use="literal"/>
      </wsdl:output>
******************************************/
function processBindings(json) {
  var wsdlDefinitions = json[ns['wsdl']+'definitions'];
  var wsdlBindings = wsdlDefinitions[ns['wsdl']+'binding'];
  if (!(wsdlBindings instanceof Array)) wsdlBindings = [wsdlBindings];
  wsdlBindings.forEach(function(someBinding) {
    // First up, find the wsdl service this binding relates to
    var thisService;
    for (someService in services) {
      if (stripNamespace(services[someService].binding) == someBinding.name) {
        thisService = services[someService];

        // Now process each operation
        var wsdlOperations = someBinding[ns['wsdl']+'operation'];
        if (!(wsdlOperations instanceof Array)) wsdlOperations = [wsdlOperations];
        wsdlOperations.forEach(function(someOperation) {
          if (someOperation.hasOwnProperty(ns['soap']+'operation')) {
            var portType = portTypes[stripNamespace(someBinding.type)][someOperation.name];
            bindings[someOperation.name] = {
              soapAction: someOperation[ns['soap']+'operation'].soapAction,
              input: messages[portType.input][0],
              output: messages[portType.output][0]
            };
            // Link the operation back to the service
            thisService[someOperation.name] = bindings[someOperation.name];
          }
        });
      }
    };
  });
  // Remove the placeholders now we've linked bindings to services
  for (var someService in services) {
    delete services[someService].binding;
  }
  //console.log("Bindings:", bindings);
  //console.log("");
};


/******************************************
<wsdl:types>
  <s:schema elementFormDefault="qualified" targetNamespace="http://blahblah.com/blah/">
    <s:import namespace="http://microsoft.com/wsdl/types/" />
    <s:element name="SomeElementName">
      <s:complexType>
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="AnotherElementName" type="tns:ScriptDetailsResponse"/>
        </s:sequence>
      </s:complexType>
    </s:element>
    <s:complexType name="SomeComplexTypeName">
      <s:sequence>
        <s:element minOccurs="0" maxOccurs="1" name="AnotherElementName" type="s:string"/>
      </s:sequence>
    </s:complexType>
    <s:simpleType name="SomeSimpleTypeName">
      <s:restriction base="s:string">
        <s:pattern value="[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}"/>
      </s:restriction>
******************************************/
function processTypes(json) {
  var xsdSchemas = json[ns['wsdl']+'definitions'][ns['wsdl']+'types'][ns['xsd']+'schema'];
  if (!(xsdSchemas instanceof Array)) xsdSchemas = [xsdSchemas];
  xsdSchemas.forEach(function(thisSchema) {
    // TODO handle the import - or not, as people don't seem to use this feature...
    //
    var elements = thisSchema[ns['xsd']+'element'];
    if (elements != null) {
      if (!(elements instanceof Array)) elements = [elements];
      elements.forEach(function(someElement) {
        xmlCache.elements[someElement.name] = someElement;
      });
    }

    var complexTypes = thisSchema[ns['xsd']+'complexType'];
    if (complexTypes != null) {
      if (!(complexTypes instanceof Array)) complexTypes = [complexTypes];
      complexTypes.forEach(function(someComplexType) {
        xmlCache.complexTypes[someComplexType.name] = someComplexType;
      });
    }

    var simpleTypes = thisSchema[ns['xsd']+'simpleType'];
    if (simpleTypes != null) {
      if (!(simpleTypes instanceof Array)) simpleTypes = [simpleTypes];
      simpleTypes.forEach(function(someSimpleType) {
        xmlCache.simpleTypes[someSimpleType.name] = someSimpleType;
      });
    }
  });
  for (var someElementName in xmlCache.elements) {
    var someElement = xmlCache.elements[someElementName];
    var propertyDefinition = propertyModelElement(someElement);
    createClass(someElement.name, "Element", propertyDefinition);
  };
  for (var someComplexTypeName in xmlCache.complexTypes) {
    var someComplexType = xmlCache.complexTypes[someComplexTypeName];
    var propertyDefinition = propertyModelElement(someComplexType);
    createClass(someComplexType.name, "Type", propertyDefinition);
  };
  for (var someSimpleTypeName in xmlCache.simpleTypes) {
    var someSimpleType = xmlCache.simpleTypes[someSimpleTypeName];
    var propertyDefinition = propertyModelElement(someSimpleType);
    createClass(someSimpleType.name, "Type", propertyDefinition);
  };
};

// Convert from XSD to propertyModeler
function propertyModelElement(json) {
  var propertyDefinition = { };
  if (json.hasOwnProperty(ns['xsd']+"complexType")) {
    json = json[ns['xsd']+'complexType'];
  }
  if (json.hasOwnProperty(ns['xsd']+"complexContent")) {
    json = json[ns['xsd']+'complexContent'];
  }
  if (json.hasOwnProperty(ns['xsd']+"extension")) {
    json = json[ns['xsd']+'extension'];
    var parent = stripNamespace(json.base);
    if (xmlCache.elements.hasOwnProperty(parent)) {
      parent = xmlCache.elements[parent];
    } else if (xmlCache.complexTypes.hasOwnProperty(parent)) {
      parent = xmlCache.complexTypes[parent];
    } else if (xmlCache.simpleTypes.hasOwnProperty(parent)) {
      parent = xmlCache.simpleTypes[parent];
    } else {
      console.log("Couldn't find extension by name:", parent);
      parent = null;
    }
    if (parent != null) {
      extendProperty(propertyDefinition, propertyModelElement(parent));
    }
  }
  if (json.hasOwnProperty(ns['xsd']+"sequence")) {
    json = json[ns['xsd']+'sequence'];
  }
  if (json.hasOwnProperty(ns['xsd']+"choice")) {
    json = json[ns['xsd']+'choice'];
  }
  if (json.hasOwnProperty(ns['xsd']+"element")) {
    json = json[ns['xsd']+'element'];
  }
  if (json != null) {
    if (!(json instanceof Array)) json = [json];
    for (var i=0; i<json.length; i++) {
      var wsdlProperty = json[i];
      // Set default type?
      if (!wsdlProperty.hasOwnProperty("type")) wsdlProperty.type = ns['xsd']+"string";
      var newType = "";
      if (typeMap.hasOwnProperty(wsdlProperty.type)) {
        newType = typeMap[wsdlProperty.type];
      } else {
        newType = "Type"+stripNamespace(wsdlProperty.type);
      }

      //
      // Build the PropertyModeler property definition
      //
      propertyDefinition[wsdlProperty.name] = {
        type: newType,
        wsdlDefinition: wsdlProperty,
        mask: Modeler.GET | Modeler.SET,
        required: (parseInt(wsdlProperty.minOccurs)>0)
      };
      //propertyDefinition[wsdlProperty.name].wsdlDefinition.type = newType;

      if ((parseInt(wsdlProperty.maxOccurs)>1 || (wsdlProperty.maxOccurs=="unbounded")) &&
          (!newType.match(/ArrayOf/)) ) {
        propertyDefinition[wsdlProperty.name].mask |= Modeler.ARRAY;
      }
      if (wsdlProperty.nillable) {
        propertyDefinition[wsdlProperty.name].required = false;
      }
      // ...
      };
  } else {
    console.error("Uhhh... Whats this?!", JSON.stringify(json, null, 2));
    propertyDefinition.dummy = { };
  };

  return propertyDefinition;
};


function extendProperty(a, b) {
  for (var property in b) {
    a[property] = b[property];
  }
};

function createClass(className, type, propertyDefinition) {
  // Copy the PropertyModeler Class tempate and set the Classname
  var newClass = ""+classTemplate;
  newClass = newClass.replace(/###1###/g, type+className);
  // Drop the PropertyModeler property definitions into the template
  var txt = JSON.stringify(propertyDefinition, null, 2);
  txt = txt.substring(4, txt.length-2);
  txt = txt.replace(/\n/g, "\n  ");
  txt = txt.replace(/"mask": (.*),/g, function(a, m) {
    var result = "\"mask\": Modeler.GET"
    if (m & Modeler.SET) result += " | Modeler.SET";
    if (m & Modeler.ARRAY) result += " | Modeler.ARRAY";
    return result+",";
  });
  txt = txt.replace(/"(.*)":/g, function(a, m) {
    if (m.match(":")) return "\""+m+"\":";
    return m+":";
  });

  newClass = newClass.replace(/###2###/g, txt);
  // Insert any functions into the template
  newClass = newClass.replace(/###3###/g, "");
  // Write the Class definition to file
  try {
    fs.unlinkSync(serviceName+'/'+className+".js", 10000);
  } catch(e) { }
  fs.writeFile(process.cwd()+'/'+serviceName+'/'+type+"/"+className+".js", newClass, function (err) { });
};










