var Modeler = require("../Modeler.js");
var className = 'ElementDeleteVpnGatewayResponse';

var ElementDeleteVpnGatewayResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteVpnGatewayResponse: {
      type: "TypeDeleteVpnGatewayResponseType",
      wsdlDefinition: {
        name: "DeleteVpnGatewayResponse",
        type: "tns:DeleteVpnGatewayResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteVpnGatewayResponse;
Modeler.register(ElementDeleteVpnGatewayResponse, "ElementDeleteVpnGatewayResponse");
