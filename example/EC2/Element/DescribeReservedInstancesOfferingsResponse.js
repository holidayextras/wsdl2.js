var Modeler = require("../Modeler.js");
var className = 'ElementDescribeReservedInstancesOfferingsResponse';

var ElementDescribeReservedInstancesOfferingsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeReservedInstancesOfferingsResponse: {
      type: "TypeDescribeReservedInstancesOfferingsResponseType",
      wsdlDefinition: {
        name: "DescribeReservedInstancesOfferingsResponse",
        type: "tns:DescribeReservedInstancesOfferingsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeReservedInstancesOfferingsResponse;
Modeler.register(ElementDescribeReservedInstancesOfferingsResponse, "ElementDescribeReservedInstancesOfferingsResponse");
