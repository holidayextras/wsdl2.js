var Modeler = require("../Modeler.js");
var className = 'TypeVpnGatewaySetType';

var TypeVpnGatewaySetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeVpnGatewayType",
      wsdlDefinition: {
        name: "item",
        type: "tns:VpnGatewayType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVpnGatewaySetType;
Modeler.register(TypeVpnGatewaySetType, "TypeVpnGatewaySetType");
