var Modeler = require("../Modeler.js");
var className = 'TypeUnassignPrivateIpAddressesType';

var TypeUnassignPrivateIpAddressesType = function(json, parentObj) {
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
    privateIpAddressesSet: {
      type: "TypeAssignPrivateIpAddressesSetRequestType",
      wsdlDefinition: {
        name: "privateIpAddressesSet",
        type: "tns:AssignPrivateIpAddressesSetRequestType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeUnassignPrivateIpAddressesType;
Modeler.register(TypeUnassignPrivateIpAddressesType, "TypeUnassignPrivateIpAddressesType");
