var Modeler = require("../Modeler.js");
var className = 'TypeAttributeBooleanValueType';

var TypeAttributeBooleanValueType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  value: {
      type: "boolean",
      wsdlDefinition: {
        name: "value",
        type: "xs:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAttributeBooleanValueType;
Modeler.register(TypeAttributeBooleanValueType, "TypeAttributeBooleanValueType");
