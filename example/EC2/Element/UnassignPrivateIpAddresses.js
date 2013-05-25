var Modeler = require("../Modeler.js");
var className = 'ElementUnassignPrivateIpAddresses';

var ElementUnassignPrivateIpAddresses = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  UnassignPrivateIpAddresses: {
      type: "TypeUnassignPrivateIpAddressesType",
      wsdlDefinition: {
        name: "UnassignPrivateIpAddresses",
        type: "tns:UnassignPrivateIpAddressesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUnassignPrivateIpAddresses;
Modeler.register(ElementUnassignPrivateIpAddresses, "ElementUnassignPrivateIpAddresses");
