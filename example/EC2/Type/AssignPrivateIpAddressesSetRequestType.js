var Modeler = require("../Modeler.js");
var className = 'TypeAssignPrivateIpAddressesSetRequestType';

var TypeAssignPrivateIpAddressesSetRequestType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeAssignPrivateIpAddressesSetItemRequestType",
      wsdlDefinition: {
        name: "item",
        type: "tns:AssignPrivateIpAddressesSetItemRequestType",
        minOccurs: 1,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: true
    }
	}, parentObj, json);
};

module.exports = TypeAssignPrivateIpAddressesSetRequestType;
Modeler.register(TypeAssignPrivateIpAddressesSetRequestType, "TypeAssignPrivateIpAddressesSetRequestType");
