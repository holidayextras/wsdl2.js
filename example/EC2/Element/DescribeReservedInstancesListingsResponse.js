var Modeler = require("../Modeler.js");
var className = 'ElementDescribeReservedInstancesListingsResponse';

var ElementDescribeReservedInstancesListingsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeReservedInstancesListingsResponse: {
      type: "TypeDescribeReservedInstancesListingsResponseType",
      wsdlDefinition: {
        name: "DescribeReservedInstancesListingsResponse",
        type: "tns:DescribeReservedInstancesListingsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeReservedInstancesListingsResponse;
Modeler.register(ElementDescribeReservedInstancesListingsResponse, "ElementDescribeReservedInstancesListingsResponse");
