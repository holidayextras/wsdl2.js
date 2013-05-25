var Modeler = require("../Modeler.js");
var className = 'TypeSpotDatafeedSubscriptionType';

var TypeSpotDatafeedSubscriptionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ownerId: {
      type: "string",
      wsdlDefinition: {
        name: "ownerId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
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
    },
    state: {
      type: "string",
      wsdlDefinition: {
        name: "state",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fault: {
      type: "TypeSpotInstanceStateFaultType",
      wsdlDefinition: {
        name: "fault",
        type: "tns:SpotInstanceStateFaultType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSpotDatafeedSubscriptionType;
Modeler.register(TypeSpotDatafeedSubscriptionType, "TypeSpotDatafeedSubscriptionType");
