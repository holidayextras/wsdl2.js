var Modeler = require("../Modeler.js");
var className = 'ElementDescribeSpotDatafeedSubscriptionResponse';

var ElementDescribeSpotDatafeedSubscriptionResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeSpotDatafeedSubscriptionResponse: {
      type: "TypeDescribeSpotDatafeedSubscriptionResponseType",
      wsdlDefinition: {
        name: "DescribeSpotDatafeedSubscriptionResponse",
        type: "tns:DescribeSpotDatafeedSubscriptionResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeSpotDatafeedSubscriptionResponse;
Modeler.register(ElementDescribeSpotDatafeedSubscriptionResponse, "ElementDescribeSpotDatafeedSubscriptionResponse");
