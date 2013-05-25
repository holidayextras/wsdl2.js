var Modeler = require("../Modeler.js");
var className = 'ElementCreateInstanceExportTask';

var ElementCreateInstanceExportTask = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateInstanceExportTask: {
      type: "TypeCreateInstanceExportTaskType",
      wsdlDefinition: {
        name: "CreateInstanceExportTask",
        type: "tns:CreateInstanceExportTaskType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateInstanceExportTask;
Modeler.register(ElementCreateInstanceExportTask, "ElementCreateInstanceExportTask");
