var Modeler = require("../Modeler.js");
var className = 'TypePurchaseReservedInstancesOfferingResponseType';

var TypePurchaseReservedInstancesOfferingResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    reservedInstancesId: {
      type: "string",
      wsdlDefinition: {
        name: "reservedInstancesId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePurchaseReservedInstancesOfferingResponseType;
Modeler.register(TypePurchaseReservedInstancesOfferingResponseType, "TypePurchaseReservedInstancesOfferingResponseType");
