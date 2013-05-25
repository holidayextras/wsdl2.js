var Modeler = require("../Modeler.js");
var className = 'TypeDescribeReservedInstancesOfferingsResponseType';

var TypeDescribeReservedInstancesOfferingsResponseType = function(json, parentObj) {
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
    reservedInstancesOfferingsSet: {
      type: "TypeDescribeReservedInstancesOfferingsResponseSetType",
      wsdlDefinition: {
        name: "reservedInstancesOfferingsSet",
        type: "tns:DescribeReservedInstancesOfferingsResponseSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    nextToken: {
      type: "string",
      wsdlDefinition: {
        name: "nextToken",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeReservedInstancesOfferingsResponseType;
Modeler.register(TypeDescribeReservedInstancesOfferingsResponseType, "TypeDescribeReservedInstancesOfferingsResponseType");
