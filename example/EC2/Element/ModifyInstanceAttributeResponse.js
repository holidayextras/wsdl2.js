var Modeler = require("../Modeler.js");
var className = 'ElementModifyInstanceAttributeResponse';

var ElementModifyInstanceAttributeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ModifyInstanceAttributeResponse: {
      type: "TypeModifyInstanceAttributeResponseType",
      wsdlDefinition: {
        name: "ModifyInstanceAttributeResponse",
        type: "tns:ModifyInstanceAttributeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementModifyInstanceAttributeResponse;
Modeler.register(ElementModifyInstanceAttributeResponse, "ElementModifyInstanceAttributeResponse");
