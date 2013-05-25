var Modeler = require("../Modeler.js");
var className = 'ElementPurchaseReservedInstancesOffering';

var ElementPurchaseReservedInstancesOffering = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  PurchaseReservedInstancesOffering: {
      type: "TypePurchaseReservedInstancesOfferingType",
      wsdlDefinition: {
        name: "PurchaseReservedInstancesOffering",
        type: "tns:PurchaseReservedInstancesOfferingType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPurchaseReservedInstancesOffering;
Modeler.register(ElementPurchaseReservedInstancesOffering, "ElementPurchaseReservedInstancesOffering");
