var Modeler = require("../Modeler.js");
var className = 'TypeRouteTableIdSetType';

var TypeRouteTableIdSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeRouteTableIdSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:RouteTableIdSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRouteTableIdSetType;
Modeler.register(TypeRouteTableIdSetType, "TypeRouteTableIdSetType");
