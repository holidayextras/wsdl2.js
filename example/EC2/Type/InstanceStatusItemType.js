var Modeler = require("../Modeler.js");
var className = 'TypeInstanceStatusItemType';

var TypeInstanceStatusItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  instanceId: {
      type: "string",
      wsdlDefinition: {
        name: "instanceId",
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
    eventsSet: {
      type: "TypeInstanceStatusEventsSetType",
      wsdlDefinition: {
        name: "eventsSet",
        type: "tns:InstanceStatusEventsSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceState: {
      type: "TypeInstanceStateType",
      wsdlDefinition: {
        name: "instanceState",
        type: "tns:InstanceStateType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    systemStatus: {
      type: "TypeInstanceStatusType",
      wsdlDefinition: {
        name: "systemStatus",
        type: "tns:InstanceStatusType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceStatus: {
      type: "TypeInstanceStatusType",
      wsdlDefinition: {
        name: "instanceStatus",
        type: "tns:InstanceStatusType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceStatusItemType;
Modeler.register(TypeInstanceStatusItemType, "TypeInstanceStatusItemType");
