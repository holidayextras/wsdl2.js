var Modeler = require("../Modeler.js");
var className = 'TypePurchaseReservedInstancesOfferingType';

var TypePurchaseReservedInstancesOfferingType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  reservedInstancesOfferingId: {
      type: "string",
      wsdlDefinition: {
        name: "reservedInstancesOfferingId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceCount: {
      type: "number",
      wsdlDefinition: {
        name: "instanceCount",
        type: "xs:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    limitPrice: {
      type: "TypeReservedInstanceLimitPriceType",
      wsdlDefinition: {
        name: "limitPrice",
        type: "tns:ReservedInstanceLimitPriceType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePurchaseReservedInstancesOfferingType;
Modeler.register(TypePurchaseReservedInstancesOfferingType, "TypePurchaseReservedInstancesOfferingType");
