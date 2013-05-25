var Modeler = require("../Modeler.js");
var className = 'ElementGetConsoleOutput';

var ElementGetConsoleOutput = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  GetConsoleOutput: {
      type: "TypeGetConsoleOutputType",
      wsdlDefinition: {
        name: "GetConsoleOutput",
        type: "tns:GetConsoleOutputType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGetConsoleOutput;
Modeler.register(ElementGetConsoleOutput, "ElementGetConsoleOutput");
