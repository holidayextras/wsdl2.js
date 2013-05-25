var Modeler = require("../Modeler.js");
var className = 'ElementCreateSpotDatafeedSubscriptionResponse';

var ElementCreateSpotDatafeedSubscriptionResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateSpotDatafeedSubscriptionResponse: {
      type: "TypeCreateSpotDatafeedSubscriptionResponseType",
      wsdlDefinition: {
        name: "CreateSpotDatafeedSubscriptionResponse",
        type: "tns:CreateSpotDatafeedSubscriptionResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateSpotDatafeedSubscriptionResponse;
Modeler.register(ElementCreateSpotDatafeedSubscriptionResponse, "ElementCreateSpotDatafeedSubscriptionResponse");
