var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSpotDatafeedSubscriptionType';

var TypeDescribeSpotDatafeedSubscriptionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeSpotDatafeedSubscriptionType: {
      type: "string",
      wsdlDefinition: {
        name: "DescribeSpotDatafeedSubscriptionType",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeSpotDatafeedSubscriptionType;
Modeler.register(TypeDescribeSpotDatafeedSubscriptionType, "TypeDescribeSpotDatafeedSubscriptionType");
