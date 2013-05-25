var Modeler = require("../Modeler.js");
var className = 'TypeNetworkInterfacePrivateIpAddressesSetItemType';

var TypeNetworkInterfacePrivateIpAddressesSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  privateIpAddress: {
      type: "string",
      wsdlDefinition: {
        name: "privateIpAddress",
        type: "xs:string"
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
        type: "xs:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    association: {
      type: "TypeNetworkInterfaceAssociationType",
      wsdlDefinition: {
        name: "association",
        type: "tns:NetworkInterfaceAssociationType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeNetworkInterfacePrivateIpAddressesSetItemType;
Modeler.register(TypeNetworkInterfacePrivateIpAddressesSetItemType, "TypeNetworkInterfacePrivateIpAddressesSetItemType");
