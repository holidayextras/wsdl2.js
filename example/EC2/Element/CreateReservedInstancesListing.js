var Modeler = require("../Modeler.js");
var className = 'ElementCreateReservedInstancesListing';

var ElementCreateReservedInstancesListing = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateReservedInstancesListing: {
      type: "TypeCreateReservedInstancesListingType",
      wsdlDefinition: {
        name: "CreateReservedInstancesListing",
        type: "tns:CreateReservedInstancesListingType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateReservedInstancesListing;
Modeler.register(ElementCreateReservedInstancesListing, "ElementCreateReservedInstancesListing");
