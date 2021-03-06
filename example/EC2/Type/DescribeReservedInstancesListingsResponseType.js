var Modeler = require("../Modeler.js");
var className = 'TypeDescribeReservedInstancesListingsResponseType';

var TypeDescribeReservedInstancesListingsResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    reservedInstancesListingsSet: {
      type: "TypeDescribeReservedInstancesListingsResponseSetType",
      wsdlDefinition: {
        name: "reservedInstancesListingsSet",
        type: "tns:DescribeReservedInstancesListingsResponseSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeReservedInstancesListingsResponseType;
Modeler.register(TypeDescribeReservedInstancesListingsResponseType, "TypeDescribeReservedInstancesListingsResponseType");
