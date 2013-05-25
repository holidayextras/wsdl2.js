var Modeler = require("../Modeler.js");
var className = 'ElementCreateInstanceExportTaskResponse';

var ElementCreateInstanceExportTaskResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateInstanceExportTaskResponse: {
      type: "TypeCreateInstanceExportTaskResponseType",
      wsdlDefinition: {
        name: "CreateInstanceExportTaskResponse",
        type: "tns:CreateInstanceExportTaskResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateInstanceExportTaskResponse;
Modeler.register(ElementCreateInstanceExportTaskResponse, "ElementCreateInstanceExportTaskResponse");
