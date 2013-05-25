var Modeler = require("../Modeler.js");
var className = 'TypeCreateNetworkInterfaceResponseType';

var TypeCreateNetworkInterfaceResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    networkInterface: {
      type: "TypeNetworkInterfaceType",
      wsdlDefinition: {
        name: "networkInterface",
        type: "tns:NetworkInterfaceType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateNetworkInterfaceResponseType;
Modeler.register(TypeCreateNetworkInterfaceResponseType, "TypeCreateNetworkInterfaceResponseType");
