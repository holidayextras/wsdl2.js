var Modeler = require("../Modeler.js");
var className = 'TypeRouteTableIdSetItemType';

var TypeRouteTableIdSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  routeTableId: {
      type: "string",
      wsdlDefinition: {
        name: "routeTableId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRouteTableIdSetItemType;
Modeler.register(TypeRouteTableIdSetItemType, "TypeRouteTableIdSetItemType");
