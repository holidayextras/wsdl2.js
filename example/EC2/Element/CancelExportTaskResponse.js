var Modeler = require("../Modeler.js");
var className = 'ElementCancelExportTaskResponse';

var ElementCancelExportTaskResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CancelExportTaskResponse: {
      type: "TypeCancelExportTaskResponseType",
      wsdlDefinition: {
        name: "CancelExportTaskResponse",
        type: "tns:CancelExportTaskResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCancelExportTaskResponse;
Modeler.register(ElementCancelExportTaskResponse, "ElementCancelExportTaskResponse");
