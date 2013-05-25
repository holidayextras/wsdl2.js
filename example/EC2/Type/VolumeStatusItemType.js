var Modeler = require("../Modeler.js");
var className = 'TypeVolumeStatusItemType';

var TypeVolumeStatusItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  volumeId: {
      type: "string",
      wsdlDefinition: {
        name: "volumeId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    availabilityZone: {
      type: "string",
      wsdlDefinition: {
        name: "availabilityZone",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    volumeStatus: {
      type: "TypeVolumeStatusInfoType",
      wsdlDefinition: {
        name: "volumeStatus",
        type: "tns:VolumeStatusInfoType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    eventsSet: {
      type: "TypeVolumeStatusEventsSetType",
      wsdlDefinition: {
        name: "eventsSet",
        type: "tns:VolumeStatusEventsSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionsSet: {
      type: "TypeVolumeStatusActionsSetType",
      wsdlDefinition: {
        name: "actionsSet",
        type: "tns:VolumeStatusActionsSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVolumeStatusItemType;
Modeler.register(TypeVolumeStatusItemType, "TypeVolumeStatusItemType");
