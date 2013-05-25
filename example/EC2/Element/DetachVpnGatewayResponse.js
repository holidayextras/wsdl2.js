var Modeler = require("../Modeler.js");
var className = 'ElementDetachVpnGatewayResponse';

var ElementDetachVpnGatewayResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DetachVpnGatewayResponse: {
      type: "TypeDetachVpnGatewayResponseType",
      wsdlDefinition: {
        name: "DetachVpnGatewayResponse",
        type: "tns:DetachVpnGatewayResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDetachVpnGatewayResponse;
Modeler.register(ElementDetachVpnGatewayResponse, "ElementDetachVpnGatewayResponse");
