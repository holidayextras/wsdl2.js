var Modeler = require("../Modeler.js");
var className = 'TypeNullableAttributeBooleanValueType';

var TypeNullableAttributeBooleanValueType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  value: {
      type: "boolean",
      wsdlDefinition: {
        name: "value",
        type: "xs:boolean",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeNullableAttributeBooleanValueType;
Modeler.register(TypeNullableAttributeBooleanValueType, "TypeNullableAttributeBooleanValueType");
