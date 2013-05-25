var Modeler = require("../Modeler.js");
var className = 'TypeVpnGatewayIdSetType';

var TypeVpnGatewayIdSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeVpnGatewayIdSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:VpnGatewayIdSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVpnGatewayIdSetType;
Modeler.register(TypeVpnGatewayIdSetType, "TypeVpnGatewayIdSetType");
