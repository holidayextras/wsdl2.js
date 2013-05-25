var Modeler = require("../Modeler.js");
var className = 'TypeDescribeReservedInstancesOfferingsSetType';

var TypeDescribeReservedInstancesOfferingsSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeReservedInstancesOfferingsSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeReservedInstancesOfferingsSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeReservedInstancesOfferingsSetType;
Modeler.register(TypeDescribeReservedInstancesOfferingsSetType, "TypeDescribeReservedInstancesOfferingsSetType");
