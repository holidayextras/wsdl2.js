var Modeler = require("../Modeler.js");
var className = 'TypePriceScheduleRequestSetItemType';

var TypePriceScheduleRequestSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  term: {
      type: "Typelong",
      wsdlDefinition: {
        name: "term",
        type: "xs:long"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    price: {
      type: "number",
      wsdlDefinition: {
        name: "price",
        type: "xs:double"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    currencyCode: {
      type: "string",
      wsdlDefinition: {
        name: "currencyCode",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePriceScheduleRequestSetItemType;
Modeler.register(TypePriceScheduleRequestSetItemType, "TypePriceScheduleRequestSetItemType");
