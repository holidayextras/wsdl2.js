var Modeler = require("../Modeler.js");
var className = 'ElementResetInstanceAttribute';

var ElementResetInstanceAttribute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ResetInstanceAttribute: {
      type: "TypeResetInstanceAttributeType",
      wsdlDefinition: {
        name: "ResetInstanceAttribute",
        type: "tns:ResetInstanceAttributeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementResetInstanceAttribute;
Modeler.register(ElementResetInstanceAttribute, "ElementResetInstanceAttribute");
