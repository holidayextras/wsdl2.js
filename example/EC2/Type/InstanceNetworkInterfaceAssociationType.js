var Modeler = require("../Modeler.js");
var className = 'TypeInstanceNetworkInterfaceAssociationType';

var TypeInstanceNetworkInterfaceAssociationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  publicIp: {
      type: "string",
      wsdlDefinition: {
        name: "publicIp",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    publicDnsName: {
      type: "string",
      wsdlDefinition: {
        name: "publicDnsName",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ipOwnerId: {
      type: "string",
      wsdlDefinition: {
        name: "ipOwnerId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceNetworkInterfaceAssociationType;
Modeler.register(TypeInstanceNetworkInterfaceAssociationType, "TypeInstanceNetworkInterfaceAssociationType");
