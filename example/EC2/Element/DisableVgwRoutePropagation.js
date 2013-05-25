var Modeler = require("../Modeler.js");
var className = 'ElementDisableVgwRoutePropagation';

var ElementDisableVgwRoutePropagation = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DisableVgwRoutePropagation: {
      type: "TypeDisableVgwRoutePropagationRequestType",
      wsdlDefinition: {
        name: "DisableVgwRoutePropagation",
        type: "tns:DisableVgwRoutePropagationRequestType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDisableVgwRoutePropagation;
Modeler.register(ElementDisableVgwRoutePropagation, "ElementDisableVgwRoutePropagation");
