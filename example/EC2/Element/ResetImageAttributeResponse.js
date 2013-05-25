var Modeler = require("../Modeler.js");
var className = 'ElementResetImageAttributeResponse';

var ElementResetImageAttributeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ResetImageAttributeResponse: {
      type: "TypeResetImageAttributeResponseType",
      wsdlDefinition: {
        name: "ResetImageAttributeResponse",
        type: "tns:ResetImageAttributeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementResetImageAttributeResponse;
Modeler.register(ElementResetImageAttributeResponse, "ElementResetImageAttributeResponse");
