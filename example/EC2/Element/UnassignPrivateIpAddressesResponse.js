var Modeler = require("../Modeler.js");
var className = 'ElementUnassignPrivateIpAddressesResponse';

var ElementUnassignPrivateIpAddressesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  UnassignPrivateIpAddressesResponse: {
      type: "TypeUnassignPrivateIpAddressesResponseType",
      wsdlDefinition: {
        name: "UnassignPrivateIpAddressesResponse",
        type: "tns:UnassignPrivateIpAddressesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUnassignPrivateIpAddressesResponse;
Modeler.register(ElementUnassignPrivateIpAddressesResponse, "ElementUnassignPrivateIpAddressesResponse");
