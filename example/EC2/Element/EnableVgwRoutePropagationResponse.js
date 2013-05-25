var Modeler = require("../Modeler.js");
var className = 'ElementEnableVgwRoutePropagationResponse';

var ElementEnableVgwRoutePropagationResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  EnableVgwRoutePropagationResponse: {
      type: "TypeEnableVgwRoutePropagationResponseType",
      wsdlDefinition: {
        name: "EnableVgwRoutePropagationResponse",
        type: "tns:EnableVgwRoutePropagationResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEnableVgwRoutePropagationResponse;
Modeler.register(ElementEnableVgwRoutePropagationResponse, "ElementEnableVgwRoutePropagationResponse");
