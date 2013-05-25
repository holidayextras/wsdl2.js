var Modeler = require("../Modeler.js");
var className = 'TypeCancelExportTaskType';

var TypeCancelExportTaskType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  exportTaskId: {
      type: "string",
      wsdlDefinition: {
        name: "exportTaskId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCancelExportTaskType;
Modeler.register(TypeCancelExportTaskType, "TypeCancelExportTaskType");
