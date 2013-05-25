var Modeler = require("../Modeler.js");
var className = 'ElementGetConsoleOutputResponse';

var ElementGetConsoleOutputResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  GetConsoleOutputResponse: {
      type: "TypeGetConsoleOutputResponseType",
      wsdlDefinition: {
        name: "GetConsoleOutputResponse",
        type: "tns:GetConsoleOutputResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGetConsoleOutputResponse;
Modeler.register(ElementGetConsoleOutputResponse, "ElementGetConsoleOutputResponse");
