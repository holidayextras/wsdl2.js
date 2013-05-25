var Modeler = require("../Modeler.js");
var className = 'ElementModifyImageAttributeResponse';

var ElementModifyImageAttributeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ModifyImageAttributeResponse: {
      type: "TypeModifyImageAttributeResponseType",
      wsdlDefinition: {
        name: "ModifyImageAttributeResponse",
        type: "tns:ModifyImageAttributeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementModifyImageAttributeResponse;
Modeler.register(ElementModifyImageAttributeResponse, "ElementModifyImageAttributeResponse");
