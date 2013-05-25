var Modeler = require("../Modeler.js");
var className = 'TypeCreateNetworkInterfaceType';

var TypeCreateNetworkInterfaceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  subnetId: {
      type: "string",
      wsdlDefinition: {
        name: "subnetId",
        type: "xs:string"
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
    groupSet: {
      type: "TypeSecurityGroupIdSetType",
      wsdlDefinition: {
        name: "groupSet",
        type: "tns:SecurityGroupIdSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    privateIpAddressesSet: {
      type: "TypePrivateIpAddressesSetRequestType",
      wsdlDefinition: {
        name: "privateIpAddressesSet",
        type: "tns:PrivateIpAddressesSetRequestType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    secondaryPrivateIpAddressCount: {
      type: "number",
      wsdlDefinition: {
        name: "secondaryPrivateIpAddressCount",
        type: "xs:int",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateNetworkInterfaceType;
Modeler.register(TypeCreateNetworkInterfaceType, "TypeCreateNetworkInterfaceType");
