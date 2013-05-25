var Modeler = require("../Modeler.js");
var className = 'TypeNetworkInterfaceAssociationType';

var TypeNetworkInterfaceAssociationType = function(json, parentObj) {
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
    },
    allocationId: {
      type: "string",
      wsdlDefinition: {
        name: "allocationId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    associationId: {
      type: "string",
      wsdlDefinition: {
        name: "associationId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeNetworkInterfaceAssociationType;
Modeler.register(TypeNetworkInterfaceAssociationType, "TypeNetworkInterfaceAssociationType");
