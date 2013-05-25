var Modeler = require("../Modeler.js");
var className = 'TypeDescribeAddressesType';

var TypeDescribeAddressesType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  publicIpsSet: {
      type: "TypeDescribeAddressesInfoType",
      wsdlDefinition: {
        name: "publicIpsSet",
        type: "tns:DescribeAddressesInfoType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    allocationIdsSet: {
      type: "TypeAllocationIdSetType",
      wsdlDefinition: {
        name: "allocationIdsSet",
        type: "tns:AllocationIdSetType"
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

module.exports = TypeDescribeAddressesType;
Modeler.register(TypeDescribeAddressesType, "TypeDescribeAddressesType");
