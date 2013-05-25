var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSpotPriceHistoryType';

var TypeDescribeSpotPriceHistoryType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  startTime: {
      type: "date",
      wsdlDefinition: {
        name: "startTime",
        type: "xs:dateTime",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    endTime: {
      type: "date",
      wsdlDefinition: {
        name: "endTime",
        type: "xs:dateTime",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceTypeSet: {
      type: "TypeInstanceTypeSetType",
      wsdlDefinition: {
        name: "instanceTypeSet",
        type: "tns:InstanceTypeSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    productDescriptionSet: {
      type: "TypeProductDescriptionSetType",
      wsdlDefinition: {
        name: "productDescriptionSet",
        type: "tns:ProductDescriptionSetType",
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
    maxResults: {
      type: "Typeinteger",
      wsdlDefinition: {
        name: "maxResults",
        type: "xs:integer",
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
    }
	}, parentObj, json);
};

module.exports = TypeDescribeSpotPriceHistoryType;
Modeler.register(TypeDescribeSpotPriceHistoryType, "TypeDescribeSpotPriceHistoryType");
