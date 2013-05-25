var Modeler = require("../Modeler.js");
var className = 'ElementDescribeReservedInstancesListings';

var ElementDescribeReservedInstancesListings = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeReservedInstancesListings: {
      type: "TypeDescribeReservedInstancesListingsType",
      wsdlDefinition: {
        name: "DescribeReservedInstancesListings",
        type: "tns:DescribeReservedInstancesListingsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeReservedInstancesListings;
Modeler.register(ElementDescribeReservedInstancesListings, "ElementDescribeReservedInstancesListings");
