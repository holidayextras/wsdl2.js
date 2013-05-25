var Modeler = require("../Modeler.js");
var className = 'TypeDescribeVpnGatewaysResponseType';

var TypeDescribeVpnGatewaysResponseType = function(json, parentObj) {
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
    vpnGatewaySet: {
      type: "TypeVpnGatewaySetType",
      wsdlDefinition: {
        name: "vpnGatewaySet",
        type: "tns:VpnGatewaySetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeVpnGatewaysResponseType;
Modeler.register(TypeDescribeVpnGatewaysResponseType, "TypeDescribeVpnGatewaysResponseType");
