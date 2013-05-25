var Modeler = require("../Modeler.js");
var className = 'ElementResetNetworkInterfaceAttributeResponse';

var ElementResetNetworkInterfaceAttributeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ResetNetworkInterfaceAttributeResponse: {
      type: "TypeResetNetworkInterfaceAttributeResponseType",
      wsdlDefinition: {
        name: "ResetNetworkInterfaceAttributeResponse",
        type: "tns:ResetNetworkInterfaceAttributeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementResetNetworkInterfaceAttributeResponse;
Modeler.register(ElementResetNetworkInterfaceAttributeResponse, "ElementResetNetworkInterfaceAttributeResponse");
