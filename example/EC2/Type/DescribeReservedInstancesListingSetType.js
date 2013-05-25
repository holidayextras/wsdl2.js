var Modeler = require("../Modeler.js");
var className = 'TypeDescribeReservedInstancesListingSetType';

var TypeDescribeReservedInstancesListingSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeReservedInstancesListingSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeReservedInstancesListingSetItemType",
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeReservedInstancesListingSetType;
Modeler.register(TypeDescribeReservedInstancesListingSetType, "TypeDescribeReservedInstancesListingSetType");
