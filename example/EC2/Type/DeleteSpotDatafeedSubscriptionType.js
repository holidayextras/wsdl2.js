var Modeler = require("../Modeler.js");
var className = 'TypeDeleteSpotDatafeedSubscriptionType';

var TypeDeleteSpotDatafeedSubscriptionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteSpotDatafeedSubscriptionType: {
      type: "string",
      wsdlDefinition: {
        name: "DeleteSpotDatafeedSubscriptionType",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDeleteSpotDatafeedSubscriptionType;
Modeler.register(TypeDeleteSpotDatafeedSubscriptionType, "TypeDeleteSpotDatafeedSubscriptionType");
