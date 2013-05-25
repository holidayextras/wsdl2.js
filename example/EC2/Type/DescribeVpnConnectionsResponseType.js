var Modeler = require("../Modeler.js");
var className = 'TypeDescribeVpnConnectionsResponseType';

var TypeDescribeVpnConnectionsResponseType = function(json, parentObj) {
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
    vpnConnectionSet: {
      type: "TypeVpnConnectionSetType",
      wsdlDefinition: {
        name: "vpnConnectionSet",
        type: "tns:VpnConnectionSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeVpnConnectionsResponseType;
Modeler.register(TypeDescribeVpnConnectionsResponseType, "TypeDescribeVpnConnectionsResponseType");
