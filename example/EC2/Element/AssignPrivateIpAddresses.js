var Modeler = require("../Modeler.js");
var className = 'ElementAssignPrivateIpAddresses';

var ElementAssignPrivateIpAddresses = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AssignPrivateIpAddresses: {
      type: "TypeAssignPrivateIpAddressesType",
      wsdlDefinition: {
        name: "AssignPrivateIpAddresses",
        type: "tns:AssignPrivateIpAddressesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAssignPrivateIpAddresses;
Modeler.register(ElementAssignPrivateIpAddresses, "ElementAssignPrivateIpAddresses");
