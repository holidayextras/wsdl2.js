var Modeler = require("../Modeler.js");
var className = 'TypeExportTaskResponseType';

var TypeExportTaskResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  undefined: {
      type: "string",
      wsdlDefinition: {
        "xs:element": {
          name: "exportToS3",
          type: "tns:ExportToS3TaskResponseType",
          minOccurs: 0
        },
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeExportTaskResponseType;
Modeler.register(TypeExportTaskResponseType, "TypeExportTaskResponseType");
