var Modeler = require("../Modeler.js");
var className = 'ElementCancelReservedInstancesListing';

var ElementCancelReservedInstancesListing = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CancelReservedInstancesListing: {
      type: "TypeCancelReservedInstancesListingType",
      wsdlDefinition: {
        name: "CancelReservedInstancesListing",
        type: "tns:CancelReservedInstancesListingType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCancelReservedInstancesListing;
Modeler.register(ElementCancelReservedInstancesListing, "ElementCancelReservedInstancesListing");
