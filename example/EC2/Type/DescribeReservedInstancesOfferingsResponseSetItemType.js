var Modeler = require("../Modeler.js");
var className = 'TypeDescribeReservedInstancesOfferingsResponseSetItemType';

var TypeDescribeReservedInstancesOfferingsResponseSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  reservedInstancesOfferingId: {
      type: "string",
      wsdlDefinition: {
        name: "reservedInstancesOfferingId",
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
    productDescription: {
      type: "string",
      wsdlDefinition: {
        name: "productDescription",
        type: "xs:string"
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
        type: "tns:RecurringChargesSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    marketplace: {
      type: "boolean",
      wsdlDefinition: {
        name: "marketplace",
        type: "xs:boolean",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    pricingDetailsSet: {
      type: "TypePricingDetailsSetType",
      wsdlDefinition: {
        name: "pricingDetailsSet",
        type: "tns:PricingDetailsSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeReservedInstancesOfferingsResponseSetItemType;
Modeler.register(TypeDescribeReservedInstancesOfferingsResponseSetItemType, "TypeDescribeReservedInstancesOfferingsResponseSetItemType");
