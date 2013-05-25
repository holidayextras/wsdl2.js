var Modeler = require("../Modeler.js");
var className = 'TypeNullableAttributeValueType';

var TypeNullableAttributeValueType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  value: {
      type: "string",
      wsdlDefinition: {
        name: "value",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeNullableAttributeValueType;
Modeler.register(TypeNullableAttributeValueType, "TypeNullableAttributeValueType");
