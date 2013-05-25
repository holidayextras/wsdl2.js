var Modeler = require("../Modeler.js");
var className = 'TypeDescribeExportTasksType';

var TypeDescribeExportTasksType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  exportTaskIdSet: {
      type: "TypeExportTaskIdSetType",
      wsdlDefinition: {
        name: "exportTaskIdSet",
        type: "tns:ExportTaskIdSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeExportTasksType;
Modeler.register(TypeDescribeExportTasksType, "TypeDescribeExportTasksType");
