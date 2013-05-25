var Modeler = require("../Modeler.js");
var className = 'ElementDescribeSpotPriceHistory';

var ElementDescribeSpotPriceHistory = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeSpotPriceHistory: {
      type: "TypeDescribeSpotPriceHistoryType",
      wsdlDefinition: {
        name: "DescribeSpotPriceHistory",
        type: "tns:DescribeSpotPriceHistoryType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeSpotPriceHistory;
Modeler.register(ElementDescribeSpotPriceHistory, "ElementDescribeSpotPriceHistory");
