var Modeler = require("../Modeler.js");
var className = 'TypeDescribeReservedInstancesType';

var TypeDescribeReservedInstancesType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
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
    },
    offeringType: {
      type: "string",
      wsdlDefinition: {
        name: "offeringType",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeReservedInstancesType;
Modeler.register(TypeDescribeReservedInstancesType, "TypeDescribeReservedInstancesType");
