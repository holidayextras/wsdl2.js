var Modeler = require("../Modeler.js");
var className = 'TypeDescribeReservedInstancesListingsResponseSetType';

var TypeDescribeReservedInstancesListingsResponseSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeReservedInstancesListingsResponseSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeReservedInstancesListingsResponseSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeReservedInstancesListingsResponseSetType;
Modeler.register(TypeDescribeReservedInstancesListingsResponseSetType, "TypeDescribeReservedInstancesListingsResponseSetType");
