var Modeler = require("../Modeler.js");
var className = 'TypeRouteTableAssociationSetType';

var TypeRouteTableAssociationSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeRouteTableAssociationType",
      wsdlDefinition: {
        name: "item",
        type: "tns:RouteTableAssociationType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRouteTableAssociationSetType;
Modeler.register(TypeRouteTableAssociationSetType, "TypeRouteTableAssociationSetType");
