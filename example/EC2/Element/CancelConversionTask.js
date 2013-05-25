var Modeler = require("../Modeler.js");
var className = 'ElementCancelConversionTask';

var ElementCancelConversionTask = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CancelConversionTask: {
      type: "TypeCancelConversionTaskType",
      wsdlDefinition: {
        name: "CancelConversionTask",
        type: "tns:CancelConversionTaskType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCancelConversionTask;
Modeler.register(ElementCancelConversionTask, "ElementCancelConversionTask");
