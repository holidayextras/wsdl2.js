var Modeler = require("../Modeler.js");
var className = 'ElementDescribeSpotDatafeedSubscription';

var ElementDescribeSpotDatafeedSubscription = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeSpotDatafeedSubscription: {
      type: "TypeDescribeSpotDatafeedSubscriptionType",
      wsdlDefinition: {
        name: "DescribeSpotDatafeedSubscription",
        type: "tns:DescribeSpotDatafeedSubscriptionType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeSpotDatafeedSubscription;
Modeler.register(ElementDescribeSpotDatafeedSubscription, "ElementDescribeSpotDatafeedSubscription");
