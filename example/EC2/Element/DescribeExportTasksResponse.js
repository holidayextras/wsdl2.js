var Modeler = require("../Modeler.js");
var className = 'ElementDescribeExportTasksResponse';

var ElementDescribeExportTasksResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeExportTasksResponse: {
      type: "TypeDescribeExportTasksResponseType",
      wsdlDefinition: {
        name: "DescribeExportTasksResponse",
        type: "tns:DescribeExportTasksResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeExportTasksResponse;
Modeler.register(ElementDescribeExportTasksResponse, "ElementDescribeExportTasksResponse");
