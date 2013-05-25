var Modeler = require("../Modeler.js");
var className = 'TypeDescribeReservedInstancesResponseSetItemType';

var TypeDescribeReservedInstancesResponseSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  reservedInstancesId: {
      type: "string",
      wsdlDefinition: {
        name: "reservedInstancesId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceType: {
      type: "string",
      wsdlDefinition: {
        name: "instanceType",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    availabilityZone: {
      type: "string",
      wsdlDefinition: {
        name: "availabilityZone",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    start: {
      type: "date",
      wsdlDefinition: {
        name: "start",
        type: "xs:dateTime"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    duration: {
      type: "Typelong",
      wsdlDefinition: {
        name: "duration",
        type: "xs:long"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fixedPrice: {
      type: "number",
      wsdlDefinition: {
        name: "fixedPrice",
        type: "xs:double"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    usagePrice: {
      type: "number",
      wsdlDefinition: {
        name: "usagePrice",
        type: "xs:double"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceCount: {
      type: "Typeinteger",
      wsdlDefinition: {
        name: "instanceCount",
        type: "xs:integer"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    productDescription: {
      type: "string",
      wsdlDefinition: {
        name: "productDescription",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    state: {
      type: "string",
      wsdlDefinition: {
        name: "state",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    tagSet: {
      type: "TypeResourceTagSetType",
      wsdlDefinition: {
        name: "tagSet",
        type: "tns:ResourceTagSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceTenancy: {
      type: "string",
      wsdlDefinition: {
        name: "instanceTenancy",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    currencyCode: {
      type: "string",
      wsdlDefinition: {
        name: "currencyCode",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    offeringType: {
      type: "string",
      wsdlDefinition: {
        name: "offeringType",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    recurringCharges: {
      type: "TypeRecurringChargesSetType",
      wsdlDefinition: {
        name: "recurringCharges",
        type: "tns:RecurringChargesSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeReservedInstancesResponseSetItemType;
Modeler.register(TypeDescribeReservedInstancesResponseSetItemType, "TypeDescribeReservedInstancesResponseSetItemType");
