var Modeler = require("../Modeler.js");
var className = 'TypeAssignPrivateIpAddressesSetItemRequestType';

var TypeAssignPrivateIpAddressesSetItemRequestType = function(json, parentObj) {
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
    }
	}, parentObj, json);
};

module.exports = TypeAssignPrivateIpAddressesSetItemRequestType;
Modeler.register(TypeAssignPrivateIpAddressesSetItemRequestType, "TypeAssignPrivateIpAddressesSetItemRequestType");
