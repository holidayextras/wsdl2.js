var Modeler = require("../Modeler.js");
var className = 'TypeInstanceNetworkInterfaceSetItemType';

var TypeInstanceNetworkInterfaceSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  networkInterfaceId: {
      type: "string",
      wsdlDefinition: {
        name: "networkInterfaceId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    subnetId: {
      type: "string",
      wsdlDefinition: {
        name: "subnetId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    vpcId: {
      type: "string",
      wsdlDefinition: {
        name: "vpcId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    description: {
      type: "string",
      wsdlDefinition: {
        name: "description",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ownerId: {
      type: "string",
      wsdlDefinition: {
        name: "ownerId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    status: {
      type: "string",
      wsdlDefinition: {
        name: "status",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    macAddress: {
      type: "string",
      wsdlDefinition: {
        name: "macAddress",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    privateIpAddress: {
      type: "string",
      wsdlDefinition: {
        name: "privateIpAddress",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    privateDnsName: {
      type: "string",
      wsdlDefinition: {
        name: "privateDnsName",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    sourceDestCheck: {
      type: "boolean",
      wsdlDefinition: {
        name: "sourceDestCheck",
        type: "xs:boolean",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    groupSet: {
      type: "TypeGroupSetType",
      wsdlDefinition: {
        name: "groupSet",
        type: "tns:GroupSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    attachment: {
      type: "TypeInstanceNetworkInterfaceAttachmentType",
      wsdlDefinition: {
        name: "attachment",
        type: "tns:InstanceNetworkInterfaceAttachmentType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    association: {
      type: "TypeInstanceNetworkInterfaceAssociationType",
      wsdlDefinition: {
        name: "association",
        type: "tns:InstanceNetworkInterfaceAssociationType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    privateIpAddressesSet: {
      type: "TypeInstancePrivateIpAddressesSetType",
      wsdlDefinition: {
        name: "privateIpAddressesSet",
        type: "tns:InstancePrivateIpAddressesSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceNetworkInterfaceSetItemType;
Modeler.register(TypeInstanceNetworkInterfaceSetItemType, "TypeInstanceNetworkInterfaceSetItemType");
