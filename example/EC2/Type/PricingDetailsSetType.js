var Modeler = require("../Modeler.js");
var className = 'TypePricingDetailsSetType';

var TypePricingDetailsSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypePricingDetailsSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:PricingDetailsSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePricingDetailsSetType;
Modeler.register(TypePricingDetailsSetType, "TypePricingDetailsSetType");
