var Modeler = require("../Modeler.js");
var className = 'TypeDescribeVpnGatewaysType';

var TypeDescribeVpnGatewaysType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  vpnGatewaySet: {
      type: "TypeVpnGatewayIdSetType",
      wsdlDefinition: {
        name: "vpnGatewaySet",
        type: "tns:VpnGatewayIdSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    filterSet: {
      type: "TypeFilterSetType",
      wsdlDefinition: {
        name: "filterSet",
        type: "tns:FilterSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeVpnGatewaysType;
Modeler.register(TypeDescribeVpnGatewaysType, "TypeDescribeVpnGatewaysType");
