var Modeler = require("../Modeler.js");
var className = 'TypeVpnConnectionSetType';

var TypeVpnConnectionSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeVpnConnectionType",
      wsdlDefinition: {
        name: "item",
        type: "tns:VpnConnectionType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVpnConnectionSetType;
Modeler.register(TypeVpnConnectionSetType, "TypeVpnConnectionSetType");
