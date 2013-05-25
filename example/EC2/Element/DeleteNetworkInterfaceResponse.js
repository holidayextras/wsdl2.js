var Modeler = require("../Modeler.js");
var className = 'ElementDeleteNetworkInterfaceResponse';

var ElementDeleteNetworkInterfaceResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteNetworkInterfaceResponse: {
      type: "TypeDeleteNetworkInterfaceResponseType",
      wsdlDefinition: {
        name: "DeleteNetworkInterfaceResponse",
        type: "tns:DeleteNetworkInterfaceResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteNetworkInterfaceResponse;
Modeler.register(ElementDeleteNetworkInterfaceResponse, "ElementDeleteNetworkInterfaceResponse");
