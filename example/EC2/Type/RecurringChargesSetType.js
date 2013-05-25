var Modeler = require("../Modeler.js");
var className = 'TypeRecurringChargesSetType';

var TypeRecurringChargesSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeRecurringChargesSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:RecurringChargesSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRecurringChargesSetType;
Modeler.register(TypeRecurringChargesSetType, "TypeRecurringChargesSetType");
