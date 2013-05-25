var Modeler = require("../Modeler.js");
var className = 'TypeCreateSpotDatafeedSubscriptionResponseType';

var TypeCreateSpotDatafeedSubscriptionResponseType = function(json, parentObj) {
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
    spotDatafeedSubscription: {
      type: "TypeSpotDatafeedSubscriptionType",
      wsdlDefinition: {
        name: "spotDatafeedSubscription",
        type: "tns:SpotDatafeedSubscriptionType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateSpotDatafeedSubscriptionResponseType;
Modeler.register(TypeCreateSpotDatafeedSubscriptionResponseType, "TypeCreateSpotDatafeedSubscriptionResponseType");
