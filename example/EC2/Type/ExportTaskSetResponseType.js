var Modeler = require("../Modeler.js");
var className = 'TypeExportTaskSetResponseType';

var TypeExportTaskSetResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeExportTaskResponseType",
      wsdlDefinition: {
        name: "item",
        type: "tns:ExportTaskResponseType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeExportTaskSetResponseType;
Modeler.register(TypeExportTaskSetResponseType, "TypeExportTaskSetResponseType");
