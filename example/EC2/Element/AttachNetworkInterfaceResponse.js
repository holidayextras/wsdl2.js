var Modeler = require("../Modeler.js");
var className = 'ElementAttachNetworkInterfaceResponse';

var ElementAttachNetworkInterfaceResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AttachNetworkInterfaceResponse: {
      type: "TypeAttachNetworkInterfaceResponseType",
      wsdlDefinition: {
        name: "AttachNetworkInterfaceResponse",
        type: "tns:AttachNetworkInterfaceResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAttachNetworkInterfaceResponse;
Modeler.register(ElementAttachNetworkInterfaceResponse, "ElementAttachNetworkInterfaceResponse");
