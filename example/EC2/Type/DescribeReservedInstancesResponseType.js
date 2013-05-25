var Modeler = require("../Modeler.js");
var className = 'TypeDescribeReservedInstancesResponseType';

var TypeDescribeReservedInstancesResponseType = function(json, parentObj) {
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
    reservedInstancesSet: {
      type: "TypeDescribeReservedInstancesResponseSetType",
      wsdlDefinition: {
        name: "reservedInstancesSet",
        type: "tns:DescribeReservedInstancesResponseSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeReservedInstancesResponseType;
Modeler.register(TypeDescribeReservedInstancesResponseType, "TypeDescribeReservedInstancesResponseType");
