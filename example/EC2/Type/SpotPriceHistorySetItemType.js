var Modeler = require("../Modeler.js");
var className = 'TypeSpotPriceHistorySetItemType';

var TypeSpotPriceHistorySetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  instanceType: {
      type: "string",
      wsdlDefinition: {
        name: "instanceType",
        type: "xs:string"
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
    spotPrice: {
      type: "string",
      wsdlDefinition: {
        name: "spotPrice",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    timestamp: {
      type: "date",
      wsdlDefinition: {
        name: "timestamp",
        type: "xs:dateTime"
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
    }
	}, parentObj, json);
};

module.exports = TypeSpotPriceHistorySetItemType;
Modeler.register(TypeSpotPriceHistorySetItemType, "TypeSpotPriceHistorySetItemType");
