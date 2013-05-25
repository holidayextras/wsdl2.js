var Modeler = require("../Modeler.js");
var className = 'ElementResetImageAttribute';

var ElementResetImageAttribute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ResetImageAttribute: {
      type: "TypeResetImageAttributeType",
      wsdlDefinition: {
        name: "ResetImageAttribute",
        type: "tns:ResetImageAttributeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementResetImageAttribute;
Modeler.register(ElementResetImageAttribute, "ElementResetImageAttribute");
