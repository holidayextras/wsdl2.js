var Modeler = require("../Modeler.js");
var className = 'TypeDiskImageType';

var TypeDiskImageType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  image: {
      type: "TypeDiskImageDetailType",
      wsdlDefinition: {
        name: "image",
        type: "tns:DiskImageDetailType"
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
    volume: {
      type: "TypeDiskImageVolumeType",
      wsdlDefinition: {
        name: "volume",
        type: "tns:DiskImageVolumeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDiskImageType;
Modeler.register(TypeDiskImageType, "TypeDiskImageType");
