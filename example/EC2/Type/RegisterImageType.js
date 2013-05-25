var Modeler = require("../Modeler.js");
var className = 'TypeRegisterImageType';

var TypeRegisterImageType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
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
    name: {
      type: "string",
      wsdlDefinition: {
        name: "name",
        type: "xs:string"
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
    }
	}, parentObj, json);
};

module.exports = TypeRegisterImageType;
Modeler.register(TypeRegisterImageType, "TypeRegisterImageType");
