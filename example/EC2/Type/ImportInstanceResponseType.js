var Modeler = require("../Modeler.js");
var className = 'TypeImportInstanceResponseType';

var TypeImportInstanceResponseType = function(json, parentObj) {
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

module.exports = TypeImportInstanceResponseType;
Modeler.register(TypeImportInstanceResponseType, "TypeImportInstanceResponseType");
