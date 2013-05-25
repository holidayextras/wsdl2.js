var Modeler = require("../Modeler.js");
var className = 'TypeImportVolumeTaskDetailsType';

var TypeImportVolumeTaskDetailsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  bytesConverted: {
      type: "Typelong",
      wsdlDefinition: {
        name: "bytesConverted",
        type: "xs:long"
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
    image: {
      type: "TypeDiskImageDescriptionType",
      wsdlDefinition: {
        name: "image",
        type: "tns:DiskImageDescriptionType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    volume: {
      type: "TypeDiskImageVolumeDescriptionType",
      wsdlDefinition: {
        name: "volume",
        type: "tns:DiskImageVolumeDescriptionType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeImportVolumeTaskDetailsType;
Modeler.register(TypeImportVolumeTaskDetailsType, "TypeImportVolumeTaskDetailsType");
