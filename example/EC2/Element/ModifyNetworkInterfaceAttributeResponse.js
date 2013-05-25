var Modeler = require("../Modeler.js");
var className = 'ElementModifyNetworkInterfaceAttributeResponse';

var ElementModifyNetworkInterfaceAttributeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ModifyNetworkInterfaceAttributeResponse: {
      type: "TypeModifyNetworkInterfaceAttributeResponseType",
      wsdlDefinition: {
        name: "ModifyNetworkInterfaceAttributeResponse",
        type: "tns:ModifyNetworkInterfaceAttributeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementModifyNetworkInterfaceAttributeResponse;
Modeler.register(ElementModifyNetworkInterfaceAttributeResponse, "ElementModifyNetworkInterfaceAttributeResponse");
