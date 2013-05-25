var Modeler = require("../Modeler.js");
var className = 'TypeRunningInstancesItemType';

var TypeRunningInstancesItemType = function(json, parentObj) {
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
    imageId: {
      type: "string",
      wsdlDefinition: {
        name: "imageId",
        type: "xs:string",
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
    privateDnsName: {
      type: "string",
      wsdlDefinition: {
        name: "privateDnsName",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    dnsName: {
      type: "string",
      wsdlDefinition: {
        name: "dnsName",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    reason: {
      type: "string",
      wsdlDefinition: {
        name: "reason",
        type: "xs:string",
        minOccurs: 0
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
    amiLaunchIndex: {
      type: "string",
      wsdlDefinition: {
        name: "amiLaunchIndex",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    productCodes: {
      type: "TypeProductCodesSetType",
      wsdlDefinition: {
        name: "productCodes",
        type: "tns:ProductCodesSetType",
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
    launchTime: {
      type: "date",
      wsdlDefinition: {
        name: "launchTime",
        type: "xs:dateTime"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    placement: {
      type: "TypePlacementResponseType",
      wsdlDefinition: {
        name: "placement",
        type: "tns:PlacementResponseType",
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
    platform: {
      type: "string",
      wsdlDefinition: {
        name: "platform",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    monitoring: {
      type: "TypeInstanceMonitoringStateType",
      wsdlDefinition: {
        name: "monitoring",
        type: "tns:InstanceMonitoringStateType",
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
    vpcId: {
      type: "string",
      wsdlDefinition: {
        name: "vpcId",
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
    },
    ipAddress: {
      type: "string",
      wsdlDefinition: {
        name: "ipAddress",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    sourceDestCheck: {
      type: "boolean",
      wsdlDefinition: {
        name: "sourceDestCheck",
        type: "xs:boolean",
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
    stateReason: {
      type: "TypeStateReasonType",
      wsdlDefinition: {
        name: "stateReason",
        type: "tns:StateReasonType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    architecture: {
      type: "string",
      wsdlDefinition: {
        name: "architecture",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    rootDeviceType: {
      type: "string",
      wsdlDefinition: {
        name: "rootDeviceType",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    rootDeviceName: {
      type: "string",
      wsdlDefinition: {
        name: "rootDeviceName",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    blockDeviceMapping: {
      type: "TypeInstanceBlockDeviceMappingResponseType",
      wsdlDefinition: {
        name: "blockDeviceMapping",
        type: "tns:InstanceBlockDeviceMappingResponseType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceLifecycle: {
      type: "string",
      wsdlDefinition: {
        name: "instanceLifecycle",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    spotInstanceRequestId: {
      type: "string",
      wsdlDefinition: {
        name: "spotInstanceRequestId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    license: {
      type: "TypeInstanceLicenseResponseType",
      wsdlDefinition: {
        name: "license",
        type: "tns:InstanceLicenseResponseType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    virtualizationType: {
      type: "string",
      wsdlDefinition: {
        name: "virtualizationType",
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
    hypervisor: {
      type: "string",
      wsdlDefinition: {
        name: "hypervisor",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    networkInterfaceSet: {
      type: "TypeInstanceNetworkInterfaceSetType",
      wsdlDefinition: {
        name: "networkInterfaceSet",
        type: "tns:InstanceNetworkInterfaceSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    iamInstanceProfile: {
      type: "TypeIamInstanceProfileResponseType",
      wsdlDefinition: {
        name: "iamInstanceProfile",
        type: "tns:IamInstanceProfileResponseType",
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

module.exports = TypeRunningInstancesItemType;
Modeler.register(TypeRunningInstancesItemType, "TypeRunningInstancesItemType");
