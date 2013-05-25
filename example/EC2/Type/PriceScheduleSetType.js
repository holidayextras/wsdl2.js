var Modeler = require("../Modeler.js");
var className = 'TypePriceScheduleSetType';

var TypePriceScheduleSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypePriceScheduleSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:PriceScheduleSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePriceScheduleSetType;
Modeler.register(TypePriceScheduleSetType, "TypePriceScheduleSetType");
