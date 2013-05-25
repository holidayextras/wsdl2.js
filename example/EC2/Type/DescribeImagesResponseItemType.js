var Modeler = require("../Modeler.js");
var className = 'TypeDescribeImagesResponseItemType';

var TypeDescribeImagesResponseItemType = function(json, parentObj) {
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
    imageLocation: {
      type: "string",
      wsdlDefinition: {
        name: "imageLocation",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    imageState: {
      type: "string",
      wsdlDefinition: {
        name: "imageState",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    imageOwnerId: {
      type: "string",
      wsdlDefinition: {
        name: "imageOwnerId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    isPublic: {
      type: "boolean",
      wsdlDefinition: {
        name: "isPublic",
        type: "xs:boolean"
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
    imageType: {
      type: "string",
      wsdlDefinition: {
        name: "imageType",
        type: "xs:string",
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
    imageOwnerAlias: {
      type: "string",
      wsdlDefinition: {
        name: "imageOwnerAlias",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    name: {
      type: "string",
      wsdlDefinition: {
        name: "name",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    description: {
      type: "string",
      wsdlDefinition: {
        name: "description",
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
      type: "TypeBlockDeviceMappingType",
      wsdlDefinition: {
        name: "blockDeviceMapping",
        type: "tns:BlockDeviceMappingType",
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
    }
	}, parentObj, json);
};

module.exports = TypeDescribeImagesResponseItemType;
Modeler.register(TypeDescribeImagesResponseItemType, "TypeDescribeImagesResponseItemType");
