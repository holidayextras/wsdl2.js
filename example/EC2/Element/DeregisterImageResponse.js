var Modeler = require("../Modeler.js");
var className = 'ElementDeregisterImageResponse';

var ElementDeregisterImageResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeregisterImageResponse: {
      type: "TypeDeregisterImageResponseType",
      wsdlDefinition: {
        name: "DeregisterImageResponse",
        type: "tns:DeregisterImageResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeregisterImageResponse;
Modeler.register(ElementDeregisterImageResponse, "ElementDeregisterImageResponse");
