var Modeler = require("../Modeler.js");
var className = 'ElementPurchaseReservedInstancesOfferingResponse';

var ElementPurchaseReservedInstancesOfferingResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  PurchaseReservedInstancesOfferingResponse: {
      type: "TypePurchaseReservedInstancesOfferingResponseType",
      wsdlDefinition: {
        name: "PurchaseReservedInstancesOfferingResponse",
        type: "tns:PurchaseReservedInstancesOfferingResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPurchaseReservedInstancesOfferingResponse;
Modeler.register(ElementPurchaseReservedInstancesOfferingResponse, "ElementPurchaseReservedInstancesOfferingResponse");
