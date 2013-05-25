var Modeler = require("../Modeler.js");
var className = 'ElementCancelConversionTaskResponse';

var ElementCancelConversionTaskResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CancelConversionTaskResponse: {
      type: "TypeCancelConversionTaskResponseType",
      wsdlDefinition: {
        name: "CancelConversionTaskResponse",
        type: "tns:CancelConversionTaskResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCancelConversionTaskResponse;
Modeler.register(ElementCancelConversionTaskResponse, "ElementCancelConversionTaskResponse");
