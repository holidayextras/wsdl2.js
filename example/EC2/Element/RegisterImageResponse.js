var Modeler = require("../Modeler.js");
var className = 'ElementRegisterImageResponse';

var ElementRegisterImageResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  RegisterImageResponse: {
      type: "TypeRegisterImageResponseType",
      wsdlDefinition: {
        name: "RegisterImageResponse",
        type: "tns:RegisterImageResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRegisterImageResponse;
Modeler.register(ElementRegisterImageResponse, "ElementRegisterImageResponse");
