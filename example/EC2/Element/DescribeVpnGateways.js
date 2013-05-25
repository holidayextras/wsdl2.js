var Modeler = require("../Modeler.js");
var className = 'ElementDescribeVpnGateways';

var ElementDescribeVpnGateways = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeVpnGateways: {
      type: "TypeDescribeVpnGatewaysType",
      wsdlDefinition: {
        name: "DescribeVpnGateways",
        type: "tns:DescribeVpnGatewaysType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeVpnGateways;
Modeler.register(ElementDescribeVpnGateways, "ElementDescribeVpnGateways");
