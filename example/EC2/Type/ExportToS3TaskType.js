var Modeler = require("../Modeler.js");
var className = 'TypeExportToS3TaskType';

var TypeExportToS3TaskType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  diskImageFormat: {
      type: "string",
      wsdlDefinition: {
        name: "diskImageFormat",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    containerFormat: {
      type: "string",
      wsdlDefinition: {
        name: "containerFormat",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    s3Bucket: {
      type: "string",
      wsdlDefinition: {
        name: "s3Bucket",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    s3Prefix: {
      type: "string",
      wsdlDefinition: {
        name: "s3Prefix",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeExportToS3TaskType;
Modeler.register(TypeExportToS3TaskType, "TypeExportToS3TaskType");
