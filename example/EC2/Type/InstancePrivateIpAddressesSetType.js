var Modeler = require("../Modeler.js");
var className = 'TypeInstancePrivateIpAddressesSetType';

var TypeInstancePrivateIpAddressesSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeInstancePrivateIpAddressesSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:InstancePrivateIpAddressesSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstancePrivateIpAddressesSetType;
Modeler.register(TypeInstancePrivateIpAddressesSetType, "TypeInstancePrivateIpAddressesSetType");
