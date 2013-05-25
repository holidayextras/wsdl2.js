var Modeler = require("../Modeler.js");
var className = 'ElementDescribeVpnConnections';

var ElementDescribeVpnConnections = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeVpnConnections: {
      type: "TypeDescribeVpnConnectionsType",
      wsdlDefinition: {
        name: "DescribeVpnConnections",
        type: "tns:DescribeVpnConnectionsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeVpnConnections;
Modeler.register(ElementDescribeVpnConnections, "ElementDescribeVpnConnections");
