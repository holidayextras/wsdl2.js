var Modeler = require("../Modeler.js");
var className = 'TypeDescribeReservedInstancesOfferingsType';

var TypeDescribeReservedInstancesOfferingsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  reservedInstancesOfferingsSet: {
      type: "TypeDescribeReservedInstancesOfferingsSetType",
      wsdlDefinition: {
        name: "reservedInstancesOfferingsSet",
        type: "tns:DescribeReservedInstancesOfferingsSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceType: {
      type: "string",
      wsdlDefinition: {
        name: "instanceType",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    availabilityZone: {
      type: "string",
      wsdlDefinition: {
        name: "availabilityZone",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    productDescription: {
      type: "string",
      wsdlDefinition: {
        name: "productDescription",
        type: "xs:string",
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
    instanceTenancy: {
      type: "string",
      wsdlDefinition: {
        name: "instanceTenancy",
        type: "xs:string",
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
    },
    includeMarketplace: {
      type: "boolean",
      wsdlDefinition: {
        name: "includeMarketplace",
        type: "xs:boolean",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    minDuration: {
      type: "Typelong",
      wsdlDefinition: {
        name: "minDuration",
        type: "xs:long",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    maxDuration: {
      type: "Typelong",
      wsdlDefinition: {
        name: "maxDuration",
        type: "xs:long",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    maxInstanceCount: {
      type: "number",
      wsdlDefinition: {
        name: "maxInstanceCount",
        type: "xs:int",
        minOccurs: 0
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
    },
    maxResults: {
      type: "number",
      wsdlDefinition: {
        name: "maxResults",
        type: "xs:int",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeReservedInstancesOfferingsType;
Modeler.register(TypeDescribeReservedInstancesOfferingsType, "TypeDescribeReservedInstancesOfferingsType");
