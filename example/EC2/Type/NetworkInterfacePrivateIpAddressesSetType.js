var Modeler = require("../Modeler.js");
var className = 'TypeNetworkInterfacePrivateIpAddressesSetType';

var TypeNetworkInterfacePrivateIpAddressesSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeNetworkInterfacePrivateIpAddressesSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:NetworkInterfacePrivateIpAddressesSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeNetworkInterfacePrivateIpAddressesSetType;
Modeler.register(TypeNetworkInterfacePrivateIpAddressesSetType, "TypeNetworkInterfacePrivateIpAddressesSetType");
