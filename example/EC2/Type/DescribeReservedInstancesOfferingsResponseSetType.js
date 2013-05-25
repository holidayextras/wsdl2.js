var Modeler = require("../Modeler.js");
var className = 'TypeDescribeReservedInstancesOfferingsResponseSetType';

var TypeDescribeReservedInstancesOfferingsResponseSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeReservedInstancesOfferingsResponseSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeReservedInstancesOfferingsResponseSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeReservedInstancesOfferingsResponseSetType;
Modeler.register(TypeDescribeReservedInstancesOfferingsResponseSetType, "TypeDescribeReservedInstancesOfferingsResponseSetType");
