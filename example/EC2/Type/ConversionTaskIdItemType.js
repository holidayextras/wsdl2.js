var Modeler = require("../Modeler.js");
var className = 'TypeConversionTaskIdItemType';

var TypeConversionTaskIdItemType = function(json, parentObj) {
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

module.exports = TypeConversionTaskIdItemType;
Modeler.register(TypeConversionTaskIdItemType, "TypeConversionTaskIdItemType");
