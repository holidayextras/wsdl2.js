var Modeler = require("../Modeler.js");
var className = 'TypeCreateSpotDatafeedSubscriptionType';

var TypeCreateSpotDatafeedSubscriptionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  bucket: {
      type: "string",
      wsdlDefinition: {
        name: "bucket",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    prefix: {
      type: "string",
      wsdlDefinition: {
        name: "prefix",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateSpotDatafeedSubscriptionType;
Modeler.register(TypeCreateSpotDatafeedSubscriptionType, "TypeCreateSpotDatafeedSubscriptionType");
