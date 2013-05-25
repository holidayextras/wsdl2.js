var Modeler = require("../Modeler.js");
var className = 'TypeImportInstanceLaunchSpecificationType';

var TypeImportInstanceLaunchSpecificationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  architecture: {
      type: "string",
      wsdlDefinition: {
        name: "architecture",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    groupSet: {
      type: "TypeImportInstanceGroupSetType",
      wsdlDefinition: {
        name: "groupSet",
        type: "tns:ImportInstanceGroupSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    userData: {
      type: "TypeUserDataType",
      wsdlDefinition: {
        name: "userData",
        type: "tns:UserDataType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceType: {
      type: "string",
      wsdlDefinition: {
        name: "instanceType",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    placement: {
      type: "TypeInstancePlacementType",
      wsdlDefinition: {
        name: "placement",
        type: "tns:InstancePlacementType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    monitoring: {
      type: "TypeMonitoringInstanceType",
      wsdlDefinition: {
        name: "monitoring",
        type: "tns:MonitoringInstanceType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    subnetId: {
      type: "string",
      wsdlDefinition: {
        name: "subnetId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceInitiatedShutdownBehavior: {
      type: "string",
      wsdlDefinition: {
        name: "instanceInitiatedShutdownBehavior",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    privateIpAddress: {
      type: "string",
      wsdlDefinition: {
        name: "privateIpAddress",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeImportInstanceLaunchSpecificationType;
Modeler.register(TypeImportInstanceLaunchSpecificationType, "TypeImportInstanceLaunchSpecificationType");
