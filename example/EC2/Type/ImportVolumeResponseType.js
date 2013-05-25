var Modeler = require("../Modeler.js");
var className = 'TypeImportVolumeResponseType';

var TypeImportVolumeResponseType = function(json, parentObj) {
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
    conversionTask: {
      type: "TypeConversionTaskType",
      wsdlDefinition: {
        name: "conversionTask",
        type: "tns:ConversionTaskType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeImportVolumeResponseType;
Modeler.register(TypeImportVolumeResponseType, "TypeImportVolumeResponseType");
