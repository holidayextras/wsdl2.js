var Modeler = require("../Modeler.js");
var className = 'TypeDescribeReservedInstancesListingSetItemType';

var TypeDescribeReservedInstancesListingSetItemType = function(json, parentObj) {
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

module.exports = TypeDescribeReservedInstancesListingSetItemType;
Modeler.register(TypeDescribeReservedInstancesListingSetItemType, "TypeDescribeReservedInstancesListingSetItemType");
