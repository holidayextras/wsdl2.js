var Modeler = require("../Modeler.js");
var className = 'TypeAttachVpnGatewayType';

var TypeAttachVpnGatewayType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  vpnGatewayId: {
      type: "string",
      wsdlDefinition: {
        name: "vpnGatewayId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    vpcId: {
      type: "string",
      wsdlDefinition: {
        name: "vpcId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAttachVpnGatewayType;
Modeler.register(TypeAttachVpnGatewayType, "TypeAttachVpnGatewayType");
