var Modeler = require("../Modeler.js");
var className = 'TypeCreateVpnGatewayResponseType';

var TypeCreateVpnGatewayResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    vpnGateway: {
      type: "TypeVpnGatewayType",
      wsdlDefinition: {
        name: "vpnGateway",
        type: "tns:VpnGatewayType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateVpnGatewayResponseType;
Modeler.register(TypeCreateVpnGatewayResponseType, "TypeCreateVpnGatewayResponseType");
