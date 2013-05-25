var Modeler = require("../Modeler.js");
var className = 'TypeVpnStaticRoutesSetType';

var TypeVpnStaticRoutesSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeVpnStaticRouteType",
      wsdlDefinition: {
        name: "item",
        type: "tns:VpnStaticRouteType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVpnStaticRoutesSetType;
Modeler.register(TypeVpnStaticRoutesSetType, "TypeVpnStaticRoutesSetType");
