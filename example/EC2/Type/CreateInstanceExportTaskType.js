var Modeler = require("../Modeler.js");
var className = 'TypeCreateInstanceExportTaskType';

var TypeCreateInstanceExportTaskType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  exportToS3: {
      type: "TypeExportToS3TaskType",
      wsdlDefinition: {
        name: "exportToS3",
        type: "tns:ExportToS3TaskType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateInstanceExportTaskType;
Modeler.register(TypeCreateInstanceExportTaskType, "TypeCreateInstanceExportTaskType");
