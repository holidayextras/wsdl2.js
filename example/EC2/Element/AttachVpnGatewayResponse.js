var Modeler = require("../Modeler.js");
var className = 'ElementAttachVpnGatewayResponse';

var ElementAttachVpnGatewayResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AttachVpnGatewayResponse: {
      type: "TypeAttachVpnGatewayResponseType",
      wsdlDefinition: {
        name: "AttachVpnGatewayResponse",
        type: "tns:AttachVpnGatewayResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAttachVpnGatewayResponse;
Modeler.register(ElementAttachVpnGatewayResponse, "ElementAttachVpnGatewayResponse");
