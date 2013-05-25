var Modeler = require("../Modeler.js");
var className = 'TypeCancelBundleTaskType';

var TypeCancelBundleTaskType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  bundleId: {
      type: "string",
      wsdlDefinition: {
        name: "bundleId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCancelBundleTaskType;
Modeler.register(TypeCancelBundleTaskType, "TypeCancelBundleTaskType");
