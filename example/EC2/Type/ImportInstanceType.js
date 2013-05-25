var Modeler = require("../Modeler.js");
var className = 'TypeImportInstanceType';

var TypeImportInstanceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
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
    launchSpecification: {
      type: "TypeImportInstanceLaunchSpecificationType",
      wsdlDefinition: {
        name: "launchSpecification",
        type: "tns:ImportInstanceLaunchSpecificationType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    diskImageSet: {
      type: "TypeDiskImageSetType",
      wsdlDefinition: {
        name: "diskImageSet",
        type: "tns:DiskImageSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    keepPartialImports: {
      type: "boolean",
      wsdlDefinition: {
        name: "keepPartialImports",
        type: "xs:boolean",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    platform: {
      type: "string",
      wsdlDefinition: {
        name: "platform",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeImportInstanceType;
Modeler.register(TypeImportInstanceType, "TypeImportInstanceType");
