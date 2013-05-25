var Modeler = require("../Modeler.js");
var className = 'ElementDeleteSpotDatafeedSubscriptionResponse';

var ElementDeleteSpotDatafeedSubscriptionResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteSpotDatafeedSubscriptionResponse: {
      type: "TypeDeleteSpotDatafeedSubscriptionResponseType",
      wsdlDefinition: {
        name: "DeleteSpotDatafeedSubscriptionResponse",
        type: "tns:DeleteSpotDatafeedSubscriptionResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteSpotDatafeedSubscriptionResponse;
Modeler.register(ElementDeleteSpotDatafeedSubscriptionResponse, "ElementDeleteSpotDatafeedSubscriptionResponse");
