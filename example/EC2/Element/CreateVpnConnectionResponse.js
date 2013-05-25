var Modeler = require("../Modeler.js");
var className = 'ElementCreateVpnConnectionResponse';

var ElementCreateVpnConnectionResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateVpnConnectionResponse: {
      type: "TypeCreateVpnConnectionResponseType",
      wsdlDefinition: {
        name: "CreateVpnConnectionResponse",
        type: "tns:CreateVpnConnectionResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateVpnConnectionResponse;
Modeler.register(ElementCreateVpnConnectionResponse, "ElementCreateVpnConnectionResponse");
