var Modeler = require("../Modeler.js");
var className = 'ElementModifyVpcAttributeResponse';

var ElementModifyVpcAttributeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ModifyVpcAttributeResponse: {
      type: "TypeModifyVpcAttributeResponseType",
      wsdlDefinition: {
        name: "ModifyVpcAttributeResponse",
        type: "tns:ModifyVpcAttributeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementModifyVpcAttributeResponse;
Modeler.register(ElementModifyVpcAttributeResponse, "ElementModifyVpcAttributeResponse");
