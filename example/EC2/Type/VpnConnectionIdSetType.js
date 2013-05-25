var Modeler = require("../Modeler.js");
var className = 'TypeVpnConnectionIdSetType';

var TypeVpnConnectionIdSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeVpnConnectionIdSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:VpnConnectionIdSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVpnConnectionIdSetType;
Modeler.register(TypeVpnConnectionIdSetType, "TypeVpnConnectionIdSetType");
