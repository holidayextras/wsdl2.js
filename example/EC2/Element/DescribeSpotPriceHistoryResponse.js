var Modeler = require("../Modeler.js");
var className = 'ElementDescribeSpotPriceHistoryResponse';

var ElementDescribeSpotPriceHistoryResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeSpotPriceHistoryResponse: {
      type: "TypeDescribeSpotPriceHistoryResponseType",
      wsdlDefinition: {
        name: "DescribeSpotPriceHistoryResponse",
        type: "tns:DescribeSpotPriceHistoryResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeSpotPriceHistoryResponse;
Modeler.register(ElementDescribeSpotPriceHistoryResponse, "ElementDescribeSpotPriceHistoryResponse");
