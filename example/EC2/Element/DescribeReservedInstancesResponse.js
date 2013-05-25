var Modeler = require("../Modeler.js");
var className = 'ElementDescribeReservedInstancesResponse';

var ElementDescribeReservedInstancesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeReservedInstancesResponse: {
      type: "TypeDescribeReservedInstancesResponseType",
      wsdlDefinition: {
        name: "DescribeReservedInstancesResponse",
        type: "tns:DescribeReservedInstancesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeReservedInstancesResponse;
Modeler.register(ElementDescribeReservedInstancesResponse, "ElementDescribeReservedInstancesResponse");
