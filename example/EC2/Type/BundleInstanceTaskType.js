var Modeler = require("../Modeler.js");
var className = 'TypeBundleInstanceTaskType';

var TypeBundleInstanceTaskType = function(json, parentObj) {
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
    bundleId: {
      type: "string",
      wsdlDefinition: {
        name: "bundleId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    state: {
      type: "string",
      wsdlDefinition: {
        name: "state",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    startTime: {
      type: "date",
      wsdlDefinition: {
        name: "startTime",
        type: "xs:dateTime"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    updateTime: {
      type: "date",
      wsdlDefinition: {
        name: "updateTime",
        type: "xs:dateTime"
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
    },
    progress: {
      type: "string",
      wsdlDefinition: {
        name: "progress",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    error: {
      type: "TypeBundleInstanceTaskErrorType",
      wsdlDefinition: {
        name: "error",
        type: "tns:BundleInstanceTaskErrorType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBundleInstanceTaskType;
Modeler.register(TypeBundleInstanceTaskType, "TypeBundleInstanceTaskType");
