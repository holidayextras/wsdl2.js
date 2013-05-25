var Modeler = require("../Modeler.js");
var className = 'ElementCreateVpnGatewayResponse';

var ElementCreateVpnGatewayResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateVpnGatewayResponse: {
      type: "TypeCreateVpnGatewayResponseType",
      wsdlDefinition: {
        name: "CreateVpnGatewayResponse",
        type: "tns:CreateVpnGatewayResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateVpnGatewayResponse;
Modeler.register(ElementCreateVpnGatewayResponse, "ElementCreateVpnGatewayResponse");
