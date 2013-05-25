var Modeler = require("../Modeler.js");
var className = 'TypeReservedInstanceLimitPriceType';

var TypeReservedInstanceLimitPriceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  amount: {
      type: "number",
      wsdlDefinition: {
        name: "amount",
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

module.exports = TypeReservedInstanceLimitPriceType;
Modeler.register(TypeReservedInstanceLimitPriceType, "TypeReservedInstanceLimitPriceType");
