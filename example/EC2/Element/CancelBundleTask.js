var Modeler = require("../Modeler.js");
var className = 'ElementCancelBundleTask';

var ElementCancelBundleTask = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CancelBundleTask: {
      type: "TypeCancelBundleTaskType",
      wsdlDefinition: {
        name: "CancelBundleTask",
        type: "tns:CancelBundleTaskType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCancelBundleTask;
Modeler.register(ElementCancelBundleTask, "ElementCancelBundleTask");
