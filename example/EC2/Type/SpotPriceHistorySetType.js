var Modeler = require("../Modeler.js");
var className = 'TypeSpotPriceHistorySetType';

var TypeSpotPriceHistorySetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeSpotPriceHistorySetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:SpotPriceHistorySetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSpotPriceHistorySetType;
Modeler.register(TypeSpotPriceHistorySetType, "TypeSpotPriceHistorySetType");
