var Modeler = require("../Modeler.js");
var className = 'TypeAttributeValueType';

var TypeAttributeValueType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  value: {
      type: "string",
      wsdlDefinition: {
        name: "value",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAttributeValueType;
Modeler.register(TypeAttributeValueType, "TypeAttributeValueType");
