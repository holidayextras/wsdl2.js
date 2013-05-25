var Modeler = require("../Modeler.js");
var className = 'TypeDescribeExportTasksResponseType';

var TypeDescribeExportTasksResponseType = function(json, parentObj) {
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
    exportTaskSet: {
      type: "TypeExportTaskSetResponseType",
      wsdlDefinition: {
        name: "exportTaskSet",
        type: "tns:ExportTaskSetResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeExportTasksResponseType;
Modeler.register(TypeDescribeExportTasksResponseType, "TypeDescribeExportTasksResponseType");
