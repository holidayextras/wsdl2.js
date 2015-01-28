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
"use strict";

function Modeler(){ };
module.exports = Modeler;

var modelCache = { };

Modeler.Settings = {
  debug: false
};

Modeler.extend = function(type, definition, obj, json) {
  json = json || { };
  
  for (var p in definition) {
    var prop = definition[p];
    (function() {
      var propertyName = p;
      var validator = prop.validation || function() { return true; };
      var validateFunction = prop.validation || function() { return true; };
      var filter = prop.filter || function(v) { return v; };
      var filterFunction = prop.filter || function(v) { return v; };
      var propertyType = prop.type;
      var propertyRequired = prop.required || false;
      var propertyValue = prop.default;
      if (prop.default == undefined) prop.default = null;
      var mask = typeof prop.mask == 'number' ? prop.mask || 6 : 6;
      var objectContext = {}

      //
      // Filter helper
      //
      var filterScope = { };
      filterScope.toMoney = function(v) {
        if (typeof v == 'string') return parseFloat(v).toFixed(2);
        if (typeof v == 'number') return v.toFixed(2);
      };
      filterScope.trim = function(v) {
        return v.trim();
      };
      filterScope.replace = function(v, find, replace) {
        return v.replace(find, replace);
      };
      filterScope.encode = function(v, type) {
        if (type == "json") return JSON.stringify(v);
        if (type == "base64") return new Buffer(v).toString('base64');
        if (type == "url") return encodeURIComponent(v);
      };
      filterScope.decode = function(v, type) {
        if (type == "json") return JSON.parse(v);
        if (type == "base64") return new Buffer(v, 'base64').toString('binary');
        if (type == "url") return decodeURIComponent(v);
      };
      filterScope.toUpperCase = function(v) {
        return v.toUpperCase();
      };
      filterScope.toLowerCase = function(v) {
        return v.toLowerCase();
      };
      filterScope.capitalise = function(v) {
        return v.split(" ").map(function(word) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(" ");
      };
      
      if (typeof filter != "function") {
        filterFunction = function(v) {
          filter.forEach(function(f) {
            var func = Object.keys(f)[0];
            var value = f[func];
            v = filterScope[func].apply({}, [v].concat(value)); 
          });
          return v;
        };
      }
      
      //
      // Value validations
      // 
      if (typeof validator != "function") {
        validateFunction = function(v) {
          if ((validator.regex) && !validator.regex.test(v)) {
            return false;
          }
          if ((validator.minlength) && (typeof v == 'string') && (v.length < validator.minlength)) {
            return false;
          }
          if ((validator.maxlength) && (typeof v == 'string') && (v.length > validator.maxlength)) {
            return false;
          }
          if ((validator.min) && (typeof v == 'number') && (v < validator.min)) {
            return false;
          }
          if ((validator.max) && (typeof v == 'number') && (v > validator.max)) {
            return false;
          }
          if ((validator.isIn) && (validator.isIn.indexOf(v) == -1)) {
            return false;
          }
          if ((validator.before) && (v instanceof Date) && (v > validator.before)) {
            return false;
          }
          if ((validator.after) && (v instanceof Date) && (v < validator.after)) {
            return false;
          }
          if ((validator.looksLike) && (typeof v == 'string')) {
            if ((validator.looksLike == 'email') && !((/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i).test(v))) return false;
            if ((validator.looksLike == 'postcode') && !((/[A-Za-z]{1,2}\d{1,2}\s{0,}\d[A-Za-z][A-Za-z]/).test(v))) return false;
            if ((validator.looksLike == 'money') && !((/(\d){0,}\.\d\d/).test(v))) return false;
          }
          return true;
        };
      }
      
      function validateNewValue(newValue) {
        var validType = ( (typeof newValue == propertyType) ||
                          ( (newValue instanceof Object) &&
                            (newValue.hasOwnProperty("__type")) &&
                            (newValue.__type == propertyType) ) );
        if ((propertyType == "date") && (newValue instanceof Date)) validType = true;
        var passedValidation = validateFunction.call(obj, newValue);
        if ( (propertyType && validType && passedValidation) || (!propertyType && passedValidation)) {
          return true;
        } else {
          if (Modeler.Settings.debug) console.log("Failed to set "+type+"."+propertyName, "- Expected:", propertyType, "Got: "+(typeof newValue)+((newValue && newValue.hasOwnProperty("__type"))?("/"+newValue.__type):""), "->", newValue);
          return false;
        }
      }
      
      function validateArray(array) {
        for (var i=0; i<array.length; i++) {
          if (!validateNewValue(array[i])) {
            array.splice(i, 1);
            i--;
          }
        }
        return array;
      }
      
      //
      // Getter for property
      //
      function getter() {
        if (mask & Modeler.ARRAY) {
          if (!Array.isArray(propertyValue)) propertyValue = new Array();
          var validArray = propertyValue.concat([]);
          Object.defineProperty(validArray, "pop", {
            value: function() {
              return propertyValue.pop();
            }
          });
          Object.defineProperty(validArray, "push", {
            value: function() {
              return propertyValue.push.apply(propertyValue, Array.prototype.slice.call(arguments));
            }
          });
          Object.defineProperty(validArray, "reverse", {
            value: function() {
              return propertyValue.reverse();
             }
          });
          Object.defineProperty(validArray, "shift", {
            value: function() {
              return propertyValue.shift();
            }
          });
          Object.defineProperty(validArray, "sort", {
            value: function() {
              return propertyValue.sort.apply(propertyValue, Array.prototype.slice.call(arguments));
            }
          });
          Object.defineProperty(validArray, "splice", {
            value: function() {
              return propertyValue.splice.apply(propertyValue, Array.prototype.slice.call(arguments));
            }
          });
          Object.defineProperty(validArray, "unshift", {
            value: function() {
              return propertyValue.unshift.apply(propertyValue, Array.prototype.slice.call(arguments));
            }
          });
          Object.defineProperty(validArray, "newChild", {
            value: function(json) {
              if (modelCache.hasOwnProperty(propertyType)) {
                propertyValue.push(new modelCache[propertyType](json));
              } else {
                this.push(json);
              }
            }
          });
          Object.defineProperty(validArray, "extract", {
            value: function() {
              return JSON.parse(JSON.stringify(this));
            }
          });
          return validArray;
        } else {
          return propertyValue;
        }
      }
      
      //
      // Setter for property
      //
      function setter(value) {   
        if ((propertyType == "date") && (/[1-2][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]T[0-9][0-9]:[0-9][0-9]:[0-9][0-9].[0-9][0-9][0-9]Z/.test(value))) {
          value = new Date(value);
        }
        if ((propertyType == "date") && (/[1-2][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]T[0-9][0-9]:[0-9][0-9]:[0-9][0-9]/.test(value))) {
		      value = new Date(value);
		    }
		    if ((propertyType == "date") && (/[1-2][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/.test(value))) {
		      value = new Date(value);
		    }
		    if ((propertyType == "string") && (typeof value != "string") && (typeof value == "number")) {
	        value = ""+value;
		    }
		    if ((propertyType == "number") && (typeof value != "number") && (typeof value == "string")) {
	        value = parseFloat(value);
		    }
        if (mask & Modeler.ARRAY) {
          if (!Array.isArray(value)) return;
          for (var i=0; i<value.length; i++) {
            value[i] = filterFunction.call(filterScope, (value[i]));
          }
          propertyValue = validateArray(value);
        } else {
          value = filterFunction.call(filterScope, value);
          if (validateNewValue(value)) {
            propertyValue = value;
          } 
        }
      }

      //
      // Handle Getter
      //
      if(mask & Modeler.GET) {
        objectContext.get = getter;
      } else {
        objectContext.get = function() {
          if (Modeler.Settings.debug) console.log("Failed to get", propertyName, "of", type, ". Permission Denied");
          return null;
        }
      }

      //
      // Handle Setter
      //
      if(mask & Modeler.SET) {
        objectContext.set = setter;
      } else {
        objectContext.set = function() {
          if (Modeler.Settings.debug) console.log("Failed to set", propertyName, "of", type, ". Permission Denied");
          return propertyValue;
        }
      }
    
      //
      // Handle Hidden
      //
      if(!(mask & Modeler.HIDDEN)) {
        objectContext.enumerable = true;
      }

      //
      // Set the Object property from the Json object passed in.
      //
      var jsonProperty = null;
      if (json.hasOwnProperty(propertyName)) {
        jsonProperty = json[propertyName];
      }
      if ((jsonProperty == null) && json.hasOwnProperty(propertyName.charAt(0).toLowerCase() + propertyName.slice(1))) {
        jsonProperty = json[propertyName.charAt(0).toLowerCase() + propertyName.slice(1)];
      }
      if ((jsonProperty == null) && json.hasOwnProperty(propertyName.toLowerCase())) {
        jsonProperty = json[propertyName.toLowerCase()];
      }
      if ((propertyType == "date") && (/[1-2][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]T[0-9][0-9]:[0-9][0-9]:[0-9][0-9]/.test(jsonProperty))) {
        jsonProperty = new Date(jsonProperty);
      }
      if ((propertyType == "date") && (/[1-2][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/.test(jsonProperty))) {
	      jsonProperty = new Date(jsonProperty);
	    }
      if ((propertyType == "string") && (typeof jsonProperty != "string")) {
        if (typeof jsonProperty == "number") {
          jsonProperty = ""+jsonProperty;
        }
        if (JSON.stringify(jsonProperty) == "{}") {
          jsonProperty = undefined;
        }
      }
      if ((propertyType == "number") && (typeof jsonProperty != "number")) {
        if (typeof jsonProperty == "string") {
          jsonProperty = parseFloat(jsonProperty);
        }
        if (JSON.stringify(jsonProperty) == "{}") {
          jsonProperty = undefined;
        }
      }
      
      if(!((jsonProperty == null) || (jsonProperty == {}) || 
          ((propertyType != 'boolean') && (jsonProperty == [])))) {
        if(modelCache[propertyType]) {
          if (mask & Modeler.ARRAY) {
            var newArray = new Array();
            if (!(jsonProperty instanceof Array)) {
              jsonProperty = [jsonProperty];
            }
            for (var i=0; i<jsonProperty.length; i++) {
              newArray.push(new modelCache[propertyType](jsonProperty[i]));
            }
            jsonProperty = newArray;
          } else {
            jsonProperty = new modelCache[propertyType](jsonProperty);
          }
        }
        setter(jsonProperty);
      }

      //
      // Define the property
      //
      Object.defineProperty(obj, propertyName, objectContext);
      
    })();
  }
  //
  // Establish our objects Class Type
  //
  Object.defineProperty(obj, "__type", {
    get: function() { return type }
  });

  
  //
  // Allow people to validate their object has all the required fields
  //
  obj.validate = function() {
    for (var p in definition) {
      var prop = definition[p];
      if (prop.required && (this[p] == null)) return false;
      if (modelCache[prop.type] && (this[prop.type] instanceof Object) && this[prop.type].hasOwnProperty('validate') && !this[prop.type].validate()) return false;
    }
    return true;
  };
  Object.defineProperty(obj, "validate", { enumerable: false });
  
  //
  //
  //
  var jsonProperties = Object.keys(json);
  for (var i=0; i<jsonProperties.length; i++) {
    var someJsonProperty = jsonProperties[i];
    if (!definition.hasOwnProperty(someJsonProperty)) {
      if (Modeler.Settings.debug) console.log("Unexpected", type+"."+someJsonProperty, "->", (typeof json[someJsonProperty])+((json[someJsonProperty] && json[someJsonProperty].hasOwnProperty("__type"))?("/"+json[someJsonProperty].__type):""), JSON.stringify(json[someJsonProperty]));
    }
  };
  
  //
  // Allow people to pull JSON data out of a Model
  //
  obj.extract = function() {
    return JSON.parse(JSON.stringify(this));
  };
  Object.defineProperty(obj, "extract", { enumerable: false });
  
  //console.log("## Constructed", type, "from", json);
  //console.log("Definition:", definition);
  //console.log("Result:", JSON.stringify(obj, null, 2));
  
  return obj;
};

Modeler.ARRAY   = 8;
Modeler.GET     = 4;
Modeler.SET     = 2;
Modeler.HIDDEN  = 1;

Modeler.register = function(model, modelName) {
  modelCache[modelName] = model;
}
