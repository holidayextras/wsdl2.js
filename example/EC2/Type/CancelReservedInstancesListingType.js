var Modeler = require("../Modeler.js");
var className = 'TypeCancelReservedInstancesListingType';

var TypeCancelReservedInstancesListingType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  reservedInstancesListingId: {
      type: "string",
      wsdlDefinition: {
        name: "reservedInstancesListingId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCancelReservedInstancesListingType;
Modeler.register(TypeCancelReservedInstancesListingType, "TypeCancelReservedInstancesListingType");
