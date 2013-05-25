var Modeler = require("../Modeler.js");
var className = 'ElementDetachNetworkInterfaceResponse';

var ElementDetachNetworkInterfaceResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DetachNetworkInterfaceResponse: {
      type: "TypeDetachNetworkInterfaceResponseType",
      wsdlDefinition: {
        name: "DetachNetworkInterfaceResponse",
        type: "tns:DetachNetworkInterfaceResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDetachNetworkInterfaceResponse;
Modeler.register(ElementDetachNetworkInterfaceResponse, "ElementDetachNetworkInterfaceResponse");
