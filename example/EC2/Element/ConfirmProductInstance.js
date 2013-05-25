var Modeler = require("../Modeler.js");
var className = 'ElementConfirmProductInstance';

var ElementConfirmProductInstance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ConfirmProductInstance: {
      type: "TypeConfirmProductInstanceType",
      wsdlDefinition: {
        name: "ConfirmProductInstance",
        type: "tns:ConfirmProductInstanceType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementConfirmProductInstance;
Modeler.register(ElementConfirmProductInstance, "ElementConfirmProductInstance");
