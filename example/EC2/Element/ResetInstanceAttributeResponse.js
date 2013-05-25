var Modeler = require("../Modeler.js");
var className = 'ElementResetInstanceAttributeResponse';

var ElementResetInstanceAttributeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ResetInstanceAttributeResponse: {
      type: "TypeResetInstanceAttributeResponseType",
      wsdlDefinition: {
        name: "ResetInstanceAttributeResponse",
        type: "tns:ResetInstanceAttributeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementResetInstanceAttributeResponse;
Modeler.register(ElementResetInstanceAttributeResponse, "ElementResetInstanceAttributeResponse");
