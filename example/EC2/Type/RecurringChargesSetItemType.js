var Modeler = require("../Modeler.js");
var className = 'TypeRecurringChargesSetItemType';

var TypeRecurringChargesSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  frequency: {
      type: "string",
      wsdlDefinition: {
        name: "frequency",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    amount: {
      type: "number",
      wsdlDefinition: {
        name: "amount",
        type: "xs:double"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRecurringChargesSetItemType;
Modeler.register(TypeRecurringChargesSetItemType, "TypeRecurringChargesSetItemType");
