var Modeler = require("../Modeler.js");
var className = 'TypeSpotInstanceRequestSetType';

var TypeSpotInstanceRequestSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeSpotInstanceRequestSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:SpotInstanceRequestSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSpotInstanceRequestSetType;
Modeler.register(TypeSpotInstanceRequestSetType, "TypeSpotInstanceRequestSetType");
