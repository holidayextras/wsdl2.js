var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSpotPriceHistoryResponseType';

var TypeDescribeSpotPriceHistoryResponseType = function(json, parentObj) {
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
    spotPriceHistorySet: {
      type: "TypeSpotPriceHistorySetType",
      wsdlDefinition: {
        name: "spotPriceHistorySet",
        type: "tns:SpotPriceHistorySetType"
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

module.exports = TypeDescribeSpotPriceHistoryResponseType;
Modeler.register(TypeDescribeSpotPriceHistoryResponseType, "TypeDescribeSpotPriceHistoryResponseType");
