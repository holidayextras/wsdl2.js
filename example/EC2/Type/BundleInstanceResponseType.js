var Modeler = require("../Modeler.js");
var className = 'TypeBundleInstanceResponseType';

var TypeBundleInstanceResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    bundleInstanceTask: {
      type: "TypeBundleInstanceTaskType",
      wsdlDefinition: {
        name: "bundleInstanceTask",
        type: "tns:BundleInstanceTaskType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBundleInstanceResponseType;
Modeler.register(TypeBundleInstanceResponseType, "TypeBundleInstanceResponseType");
