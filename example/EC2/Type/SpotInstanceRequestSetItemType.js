var Modeler = require("../Modeler.js");
var className = 'TypeSpotInstanceRequestSetItemType';

var TypeSpotInstanceRequestSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  spotInstanceRequestId: {
      type: "string",
      wsdlDefinition: {
        name: "spotInstanceRequestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    spotPrice: {
      type: "string",
      wsdlDefinition: {
        name: "spotPrice",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    type: {
      type: "string",
      wsdlDefinition: {
        name: "type",
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
    },
    status: {
      type: "TypeSpotInstanceStatusMessageType",
      wsdlDefinition: {
        name: "status",
        type: "tns:SpotInstanceStatusMessageType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    validFrom: {
      type: "date",
      wsdlDefinition: {
        name: "validFrom",
        type: "xs:dateTime",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    validUntil: {
      type: "date",
      wsdlDefinition: {
        name: "validUntil",
        type: "xs:dateTime",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    launchGroup: {
      type: "string",
      wsdlDefinition: {
        name: "launchGroup",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    availabilityZoneGroup: {
      type: "string",
      wsdlDefinition: {
        name: "availabilityZoneGroup",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    launchSpecification: {
      type: "TypeLaunchSpecificationResponseType",
      wsdlDefinition: {
        name: "launchSpecification",
        type: "tns:LaunchSpecificationResponseType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceId: {
      type: "string",
      wsdlDefinition: {
        name: "instanceId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    createTime: {
      type: "date",
      wsdlDefinition: {
        name: "createTime",
        type: "xs:dateTime",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    productDescription: {
      type: "string",
      wsdlDefinition: {
        name: "productDescription",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    tagSet: {
      type: "TypeResourceTagSetType",
      wsdlDefinition: {
        name: "tagSet",
        type: "tns:ResourceTagSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    launchedAvailabilityZone: {
      type: "string",
      wsdlDefinition: {
        name: "launchedAvailabilityZone",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSpotInstanceRequestSetItemType;
Modeler.register(TypeSpotInstanceRequestSetItemType, "TypeSpotInstanceRequestSetItemType");
