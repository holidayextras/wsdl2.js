var Modeler = require("../Modeler.js");
var className = 'TypePlacementGroupSetType';

var TypePlacementGroupSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypePlacementGroupInfoType",
      wsdlDefinition: {
        name: "item",
        type: "tns:PlacementGroupInfoType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePlacementGroupSetType;
Modeler.register(TypePlacementGroupSetType, "TypePlacementGroupSetType");
