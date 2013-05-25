var Modeler = require("../Modeler.js");
var className = 'ElementDescribeExportTasks';

var ElementDescribeExportTasks = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeExportTasks: {
      type: "TypeDescribeExportTasksType",
      wsdlDefinition: {
        name: "DescribeExportTasks",
        type: "tns:DescribeExportTasksType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeExportTasks;
Modeler.register(ElementDescribeExportTasks, "ElementDescribeExportTasks");
