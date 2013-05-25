var Modeler = require("../Modeler.js");
var className = 'TypeRouteTableSetType';

var TypeRouteTableSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeRouteTableType",
      wsdlDefinition: {
        name: "item",
        type: "tns:RouteTableType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRouteTableSetType;
Modeler.register(TypeRouteTableSetType, "TypeRouteTableSetType");
