var Modeler = require("../Modeler.js");
var className = 'TypeDescribeVpnConnectionsType';

var TypeDescribeVpnConnectionsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  vpnConnectionSet: {
      type: "TypeVpnConnectionIdSetType",
      wsdlDefinition: {
        name: "vpnConnectionSet",
        type: "tns:VpnConnectionIdSetType",
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

module.exports = TypeDescribeVpnConnectionsType;
Modeler.register(TypeDescribeVpnConnectionsType, "TypeDescribeVpnConnectionsType");
