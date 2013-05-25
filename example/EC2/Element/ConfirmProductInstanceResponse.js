var Modeler = require("../Modeler.js");
var className = 'ElementConfirmProductInstanceResponse';

var ElementConfirmProductInstanceResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ConfirmProductInstanceResponse: {
      type: "TypeConfirmProductInstanceResponseType",
      wsdlDefinition: {
        name: "ConfirmProductInstanceResponse",
        type: "tns:ConfirmProductInstanceResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementConfirmProductInstanceResponse;
Modeler.register(ElementConfirmProductInstanceResponse, "ElementConfirmProductInstanceResponse");
