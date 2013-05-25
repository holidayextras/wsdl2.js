var Modeler = require("../Modeler.js");
var className = 'TypeBundleInstanceTaskStorageType';

var TypeBundleInstanceTaskStorageType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  S3: {
      type: "TypeBundleInstanceS3StorageType",
      wsdlDefinition: {
        name: "S3",
        type: "tns:BundleInstanceS3StorageType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBundleInstanceTaskStorageType;
Modeler.register(TypeBundleInstanceTaskStorageType, "TypeBundleInstanceTaskStorageType");
