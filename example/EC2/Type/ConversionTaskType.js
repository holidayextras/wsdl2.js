var Modeler = require("../Modeler.js");
var className = 'TypeConversionTaskType';

var TypeConversionTaskType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  importVolume: {
      type: "TypeImportVolumeTaskDetailsType",
      wsdlDefinition: {
        name: "importVolume",
        type: "tns:ImportVolumeTaskDetailsType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    importInstance: {
      type: "TypeImportInstanceTaskDetailsType",
      wsdlDefinition: {
        name: "importInstance",
        type: "tns:ImportInstanceTaskDetailsType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeConversionTaskType;
Modeler.register(TypeConversionTaskType, "TypeConversionTaskType");
