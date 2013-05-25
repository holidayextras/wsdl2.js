var Modeler = require("../Modeler.js");
var className = 'TypeVpnConnectionIdSetItemType';

var TypeVpnConnectionIdSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  vpnConnectionId: {
      type: "string",
      wsdlDefinition: {
        name: "vpnConnectionId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVpnConnectionIdSetItemType;
Modeler.register(TypeVpnConnectionIdSetItemType, "TypeVpnConnectionIdSetItemType");
