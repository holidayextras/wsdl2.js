var Modeler = require("../Modeler.js");
var className = 'TypeVpnGatewayIdSetItemType';

var TypeVpnGatewayIdSetItemType = function(json, parentObj) {
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
    }
	}, parentObj, json);
};

module.exports = TypeVpnGatewayIdSetItemType;
Modeler.register(TypeVpnGatewayIdSetItemType, "TypeVpnGatewayIdSetItemType");
