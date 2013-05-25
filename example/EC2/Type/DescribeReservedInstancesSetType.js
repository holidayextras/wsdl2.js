var Modeler = require("../Modeler.js");
var className = 'TypeDescribeReservedInstancesSetType';

var TypeDescribeReservedInstancesSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeReservedInstancesSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeReservedInstancesSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeReservedInstancesSetType;
Modeler.register(TypeDescribeReservedInstancesSetType, "TypeDescribeReservedInstancesSetType");
