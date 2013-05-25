var Modeler = require("../Modeler.js");
var className = 'TypeDescribeReservedInstancesListingsType';

var TypeDescribeReservedInstancesListingsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  reservedInstancesListingSet: {
      type: "TypeDescribeReservedInstancesListingSetType",
      wsdlDefinition: {
        name: "reservedInstancesListingSet",
        type: "tns:DescribeReservedInstancesListingSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    reservedInstancesSet: {
      type: "TypeDescribeReservedInstancesSetType",
      wsdlDefinition: {
        name: "reservedInstancesSet",
        type: "tns:DescribeReservedInstancesSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    filterSet: {
      type: "TypeFilterSetType",
      wsdlDefinition: {
        name: "filterSet",
        type: "tns:FilterSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeReservedInstancesListingsType;
Modeler.register(TypeDescribeReservedInstancesListingsType, "TypeDescribeReservedInstancesListingsType");
