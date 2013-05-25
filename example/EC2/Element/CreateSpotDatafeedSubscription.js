var Modeler = require("../Modeler.js");
var className = 'ElementCreateSpotDatafeedSubscription';

var ElementCreateSpotDatafeedSubscription = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateSpotDatafeedSubscription: {
      type: "TypeCreateSpotDatafeedSubscriptionType",
      wsdlDefinition: {
        name: "CreateSpotDatafeedSubscription",
        type: "tns:CreateSpotDatafeedSubscriptionType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateSpotDatafeedSubscription;
Modeler.register(ElementCreateSpotDatafeedSubscription, "ElementCreateSpotDatafeedSubscription");
