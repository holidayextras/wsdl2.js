var Modeler = require("../Modeler.js");
var className = 'TypePriceScheduleRequestSetType';

var TypePriceScheduleRequestSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypePriceScheduleRequestSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:PriceScheduleRequestSetItemType",
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePriceScheduleRequestSetType;
Modeler.register(TypePriceScheduleRequestSetType, "TypePriceScheduleRequestSetType");
