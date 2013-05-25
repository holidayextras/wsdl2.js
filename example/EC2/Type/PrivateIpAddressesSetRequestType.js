var Modeler = require("../Modeler.js");
var className = 'TypePrivateIpAddressesSetRequestType';

var TypePrivateIpAddressesSetRequestType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypePrivateIpAddressesSetItemRequestType",
      wsdlDefinition: {
        name: "item",
        type: "tns:PrivateIpAddressesSetItemRequestType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePrivateIpAddressesSetRequestType;
Modeler.register(TypePrivateIpAddressesSetRequestType, "TypePrivateIpAddressesSetRequestType");
