var Modeler = require("../Modeler.js");
var className = 'TypeRunInstancesType';

var TypeRunInstancesType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  imageId: {
      type: "string",
      wsdlDefinition: {
        name: "imageId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    minCount: {
      type: "number",
      wsdlDefinition: {
        name: "minCount",
        type: "xs:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    maxCount: {
      type: "number",
      wsdlDefinition: {
        name: "maxCount",
        type: "xs:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    keyName: {
      type: "string",
      wsdlDefinition: {
        name: "keyName",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    groupSet: {
      type: "TypeGroupSetType",
      wsdlDefinition: {
        name: "groupSet",
        type: "tns:GroupSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    additionalInfo: {
      type: "string",
      wsdlDefinition: {
        name: "additionalInfo",
        type: "xs:string",
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
    addressingType: {
      type: "string",
      wsdlDefinition: {
        name: "addressingType",
        type: "xs:string",
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
      type: "TypePlacementRequestType",
      wsdlDefinition: {
        name: "placement",
        type: "tns:PlacementRequestType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    kernelId: {
      type: "string",
      wsdlDefinition: {
        name: "kernelId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ramdiskId: {
      type: "string",
      wsdlDefinition: {
        name: "ramdiskId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    blockDeviceMapping: {
      type: "TypeBlockDeviceMappingType",
      wsdlDefinition: {
        name: "blockDeviceMapping",
        type: "tns:BlockDeviceMappingType",
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
    disableApiTermination: {
      type: "boolean",
      wsdlDefinition: {
        name: "disableApiTermination",
        type: "xs:boolean",
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
    license: {
      type: "TypeInstanceLicenseRequestType",
      wsdlDefinition: {
        name: "license",
        type: "tns:InstanceLicenseRequestType",
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
    },
    clientToken: {
      type: "string",
      wsdlDefinition: {
        name: "clientToken",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    networkInterfaceSet: {
      type: "TypeInstanceNetworkInterfaceSetRequestType",
      wsdlDefinition: {
        name: "networkInterfaceSet",
        type: "tns:InstanceNetworkInterfaceSetRequestType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    iamInstanceProfile: {
      type: "TypeIamInstanceProfileRequestType",
      wsdlDefinition: {
        name: "iamInstanceProfile",
        type: "tns:IamInstanceProfileRequestType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ebsOptimized: {
      type: "boolean",
      wsdlDefinition: {
        name: "ebsOptimized",
        type: "xs:boolean",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRunInstancesType;
Modeler.register(TypeRunInstancesType, "TypeRunInstancesType");
