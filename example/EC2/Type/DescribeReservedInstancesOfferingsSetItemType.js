var Modeler = require("../Modeler.js");
var className = 'TypeDescribeReservedInstancesOfferingsSetItemType';

var TypeDescribeReservedInstancesOfferingsSetItemType = function(json, parentObj) {
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
    }
	}, parentObj, json);
};

module.exports = TypeDescribeReservedInstancesOfferingsSetItemType;
Modeler.register(TypeDescribeReservedInstancesOfferingsSetItemType, "TypeDescribeReservedInstancesOfferingsSetItemType");
