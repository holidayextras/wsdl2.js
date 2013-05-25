var Modeler = require("../Modeler.js");
var className = 'TypeSpotInstanceRequestIdSetType';

var TypeSpotInstanceRequestIdSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeSpotInstanceRequestIdSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:SpotInstanceRequestIdSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSpotInstanceRequestIdSetType;
Modeler.register(TypeSpotInstanceRequestIdSetType, "TypeSpotInstanceRequestIdSetType");
