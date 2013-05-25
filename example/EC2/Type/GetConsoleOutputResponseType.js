var Modeler = require("../Modeler.js");
var className = 'TypeGetConsoleOutputResponseType';

var TypeGetConsoleOutputResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceId: {
      type: "string",
      wsdlDefinition: {
        name: "instanceId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    timestamp: {
      type: "date",
      wsdlDefinition: {
        name: "timestamp",
        type: "xs:dateTime"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    output: {
      type: "string",
      wsdlDefinition: {
        name: "output",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeGetConsoleOutputResponseType;
Modeler.register(TypeGetConsoleOutputResponseType, "TypeGetConsoleOutputResponseType");
