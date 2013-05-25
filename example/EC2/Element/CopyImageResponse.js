var Modeler = require("../Modeler.js");
var className = 'ElementCopyImageResponse';

var ElementCopyImageResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CopyImageResponse: {
      type: "TypeCopyImageResponseType",
      wsdlDefinition: {
        name: "CopyImageResponse",
        type: "tns:CopyImageResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCopyImageResponse;
Modeler.register(ElementCopyImageResponse, "ElementCopyImageResponse");
