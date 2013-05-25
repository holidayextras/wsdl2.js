var Modeler = require("../Modeler.js");
var className = 'TypeDescribeBundleTasksResponseType';

var TypeDescribeBundleTasksResponseType = function(json, parentObj) {
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
    bundleInstanceTasksSet: {
      type: "TypeBundleInstanceTasksSetType",
      wsdlDefinition: {
        name: "bundleInstanceTasksSet",
        type: "tns:BundleInstanceTasksSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeBundleTasksResponseType;
Modeler.register(TypeDescribeBundleTasksResponseType, "TypeDescribeBundleTasksResponseType");
