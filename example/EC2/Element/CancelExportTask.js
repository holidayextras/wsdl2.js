var Modeler = require("../Modeler.js");
var className = 'ElementCancelExportTask';

var ElementCancelExportTask = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CancelExportTask: {
      type: "TypeCancelExportTaskType",
      wsdlDefinition: {
        name: "CancelExportTask",
        type: "tns:CancelExportTaskType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCancelExportTask;
Modeler.register(ElementCancelExportTask, "ElementCancelExportTask");
