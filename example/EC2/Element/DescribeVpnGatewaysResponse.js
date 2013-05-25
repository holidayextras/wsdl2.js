var Modeler = require("../Modeler.js");
var className = 'ElementDescribeVpnGatewaysResponse';

var ElementDescribeVpnGatewaysResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeVpnGatewaysResponse: {
      type: "TypeDescribeVpnGatewaysResponseType",
      wsdlDefinition: {
        name: "DescribeVpnGatewaysResponse",
        type: "tns:DescribeVpnGatewaysResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeVpnGatewaysResponse;
Modeler.register(ElementDescribeVpnGatewaysResponse, "ElementDescribeVpnGatewaysResponse");
