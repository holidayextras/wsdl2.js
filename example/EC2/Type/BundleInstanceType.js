var Modeler = require("../Modeler.js");
var className = 'TypeBundleInstanceType';

var TypeBundleInstanceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  instanceId: {
      type: "string",
      wsdlDefinition: {
        name: "instanceId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    storage: {
      type: "TypeBundleInstanceTaskStorageType",
      wsdlDefinition: {
        name: "storage",
        type: "tns:BundleInstanceTaskStorageType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBundleInstanceType;
Modeler.register(TypeBundleInstanceType, "TypeBundleInstanceType");
