var Modeler = require("../Modeler.js");
var className = 'ElementDescribeReservedInstancesOfferings';

var ElementDescribeReservedInstancesOfferings = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeReservedInstancesOfferings: {
      type: "TypeDescribeReservedInstancesOfferingsType",
      wsdlDefinition: {
        name: "DescribeReservedInstancesOfferings",
        type: "tns:DescribeReservedInstancesOfferingsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeReservedInstancesOfferings;
Modeler.register(ElementDescribeReservedInstancesOfferings, "ElementDescribeReservedInstancesOfferings");
