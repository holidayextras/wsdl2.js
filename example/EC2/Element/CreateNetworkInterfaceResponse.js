var Modeler = require("../Modeler.js");
var className = 'ElementCreateNetworkInterfaceResponse';

var ElementCreateNetworkInterfaceResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateNetworkInterfaceResponse: {
      type: "TypeCreateNetworkInterfaceResponseType",
      wsdlDefinition: {
        name: "CreateNetworkInterfaceResponse",
        type: "tns:CreateNetworkInterfaceResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateNetworkInterfaceResponse;
Modeler.register(ElementCreateNetworkInterfaceResponse, "ElementCreateNetworkInterfaceResponse");
