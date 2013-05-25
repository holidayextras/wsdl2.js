var Modeler = require("../Modeler.js");
var className = 'TypeInstancePrivateIpAddressesSetItemType';

var TypeInstancePrivateIpAddressesSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
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
    primary: {
      type: "boolean",
      wsdlDefinition: {
        name: "primary",
        type: "xs:boolean",
        minOccurs: 0
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
    }
	}, parentObj, json);
};

module.exports = TypeInstancePrivateIpAddressesSetItemType;
Modeler.register(TypeInstancePrivateIpAddressesSetItemType, "TypeInstancePrivateIpAddressesSetItemType");
