var Modeler = require("../Modeler.js");
var className = 'ElementEnableVgwRoutePropagation';

var ElementEnableVgwRoutePropagation = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  EnableVgwRoutePropagation: {
      type: "TypeEnableVgwRoutePropagationRequestType",
      wsdlDefinition: {
        name: "EnableVgwRoutePropagation",
        type: "tns:EnableVgwRoutePropagationRequestType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEnableVgwRoutePropagation;
Modeler.register(ElementEnableVgwRoutePropagation, "ElementEnableVgwRoutePropagation");
