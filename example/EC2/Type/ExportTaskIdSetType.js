var Modeler = require("../Modeler.js");
var className = 'TypeExportTaskIdSetType';

var TypeExportTaskIdSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeExportTaskIdType",
      wsdlDefinition: {
        name: "item",
        type: "tns:ExportTaskIdType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeExportTaskIdSetType;
Modeler.register(TypeExportTaskIdSetType, "TypeExportTaskIdSetType");
