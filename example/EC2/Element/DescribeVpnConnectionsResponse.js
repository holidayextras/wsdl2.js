var Modeler = require("../Modeler.js");
var className = 'ElementDescribeVpnConnectionsResponse';

var ElementDescribeVpnConnectionsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeVpnConnectionsResponse: {
      type: "TypeDescribeVpnConnectionsResponseType",
      wsdlDefinition: {
        name: "DescribeVpnConnectionsResponse",
        type: "tns:DescribeVpnConnectionsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeVpnConnectionsResponse;
Modeler.register(ElementDescribeVpnConnectionsResponse, "ElementDescribeVpnConnectionsResponse");
