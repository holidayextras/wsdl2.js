var Modeler = require("../Modeler.js");
var className = 'TypeExportToS3TaskResponseType';

var TypeExportToS3TaskResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  diskImageFormat: {
      type: "string",
      wsdlDefinition: {
        name: "diskImageFormat",
        type: "xs:string"
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
    s3Key: {
      type: "string",
      wsdlDefinition: {
        name: "s3Key",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeExportToS3TaskResponseType;
Modeler.register(TypeExportToS3TaskResponseType, "TypeExportToS3TaskResponseType");
