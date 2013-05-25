var Modeler = require("../Modeler.js");
var className = 'ElementAssignPrivateIpAddressesResponse';

var ElementAssignPrivateIpAddressesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AssignPrivateIpAddressesResponse: {
      type: "TypeAssignPrivateIpAddressesResponseType",
      wsdlDefinition: {
        name: "AssignPrivateIpAddressesResponse",
        type: "tns:AssignPrivateIpAddressesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAssignPrivateIpAddressesResponse;
Modeler.register(ElementAssignPrivateIpAddressesResponse, "ElementAssignPrivateIpAddressesResponse");
