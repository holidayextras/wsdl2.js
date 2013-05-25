var Modeler = require("../Modeler.js");
var className = 'ElementCreateImageResponse';

var ElementCreateImageResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateImageResponse: {
      type: "TypeCreateImageResponseType",
      wsdlDefinition: {
        name: "CreateImageResponse",
        type: "tns:CreateImageResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateImageResponse;
Modeler.register(ElementCreateImageResponse, "ElementCreateImageResponse");
