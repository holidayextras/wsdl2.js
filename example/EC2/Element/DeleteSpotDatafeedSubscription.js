var Modeler = require("../Modeler.js");
var className = 'ElementDeleteSpotDatafeedSubscription';

var ElementDeleteSpotDatafeedSubscription = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteSpotDatafeedSubscription: {
      type: "TypeDeleteSpotDatafeedSubscriptionType",
      wsdlDefinition: {
        name: "DeleteSpotDatafeedSubscription",
        type: "tns:DeleteSpotDatafeedSubscriptionType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteSpotDatafeedSubscription;
Modeler.register(ElementDeleteSpotDatafeedSubscription, "ElementDeleteSpotDatafeedSubscription");
