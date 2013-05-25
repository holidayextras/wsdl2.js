var Modeler = require("../Modeler.js");
var className = 'TypeDiskImageDescriptionType';

var TypeDiskImageDescriptionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  format: {
      type: "string",
      wsdlDefinition: {
        name: "format",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    size: {
      type: "Typelong",
      wsdlDefinition: {
        name: "size",
        type: "xs:long"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    importManifestUrl: {
      type: "string",
      wsdlDefinition: {
        name: "importManifestUrl",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    checksum: {
      type: "string",
      wsdlDefinition: {
        name: "checksum",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDiskImageDescriptionType;
Modeler.register(TypeDiskImageDescriptionType, "TypeDiskImageDescriptionType");
