var Modeler = require("../Modeler.js");
var className = 'TypeCancelConversionTaskType';

var TypeCancelConversionTaskType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  conversionTaskId: {
      type: "string",
      wsdlDefinition: {
        name: "conversionTaskId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCancelConversionTaskType;
Modeler.register(TypeCancelConversionTaskType, "TypeCancelConversionTaskType");
