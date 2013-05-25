var Modeler = require("../Modeler.js");
var className = 'TypeCreateInstanceExportTaskResponseType';

var TypeCreateInstanceExportTaskResponseType = function(json, parentObj) {
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
    exportTask: {
      type: "TypeExportTaskResponseType",
      wsdlDefinition: {
        name: "exportTask",
        type: "tns:ExportTaskResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateInstanceExportTaskResponseType;
Modeler.register(TypeCreateInstanceExportTaskResponseType, "TypeCreateInstanceExportTaskResponseType");
