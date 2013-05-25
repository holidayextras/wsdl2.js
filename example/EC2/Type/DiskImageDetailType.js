var Modeler = require("../Modeler.js");
var className = 'TypeDiskImageDetailType';

var TypeDiskImageDetailType = function(json, parentObj) {
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
    bytes: {
      type: "Typelong",
      wsdlDefinition: {
        name: "bytes",
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
    }
	}, parentObj, json);
};

module.exports = TypeDiskImageDetailType;
Modeler.register(TypeDiskImageDetailType, "TypeDiskImageDetailType");
