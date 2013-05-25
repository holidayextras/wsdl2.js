var Modeler = require("../Modeler.js");
var className = 'TypeBundleInstanceS3StorageType';

var TypeBundleInstanceS3StorageType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  bucket: {
      type: "string",
      wsdlDefinition: {
        name: "bucket",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    prefix: {
      type: "string",
      wsdlDefinition: {
        name: "prefix",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    awsAccessKeyId: {
      type: "string",
      wsdlDefinition: {
        name: "awsAccessKeyId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    uploadPolicy: {
      type: "string",
      wsdlDefinition: {
        name: "uploadPolicy",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    uploadPolicySignature: {
      type: "string",
      wsdlDefinition: {
        name: "uploadPolicySignature",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBundleInstanceS3StorageType;
Modeler.register(TypeBundleInstanceS3StorageType, "TypeBundleInstanceS3StorageType");
