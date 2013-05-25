var Modeler = require("../Modeler.js");
var className = 'TypePricingDetailsSetItemType';

var TypePricingDetailsSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  price: {
      type: "number",
      wsdlDefinition: {
        name: "price",
        type: "xs:double"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    count: {
      type: "number",
      wsdlDefinition: {
        name: "count",
        type: "xs:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePricingDetailsSetItemType;
Modeler.register(TypePricingDetailsSetItemType, "TypePricingDetailsSetItemType");
