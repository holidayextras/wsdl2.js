var Modeler = require("../Modeler.js");
var className = 'TypeExportTaskIdType';

var TypeExportTaskIdType = function(json, parentObj) {
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

module.exports = TypeExportTaskIdType;
Modeler.register(TypeExportTaskIdType, "TypeExportTaskIdType");
