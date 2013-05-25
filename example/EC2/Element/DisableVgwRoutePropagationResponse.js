var Modeler = require("../Modeler.js");
var className = 'ElementDisableVgwRoutePropagationResponse';

var ElementDisableVgwRoutePropagationResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DisableVgwRoutePropagationResponse: {
      type: "TypeDisableVgwRoutePropagationResponseType",
      wsdlDefinition: {
        name: "DisableVgwRoutePropagationResponse",
        type: "tns:DisableVgwRoutePropagationResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDisableVgwRoutePropagationResponse;
Modeler.register(ElementDisableVgwRoutePropagationResponse, "ElementDisableVgwRoutePropagationResponse");
