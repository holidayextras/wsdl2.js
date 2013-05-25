var Modeler = require("../Modeler.js");
var className = 'TypeRouteSetType';

var TypeRouteSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeRouteType",
      wsdlDefinition: {
        name: "item",
        type: "tns:RouteType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRouteSetType;
Modeler.register(TypeRouteSetType, "TypeRouteSetType");
