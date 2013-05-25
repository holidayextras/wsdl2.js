var Modeler = require("../Modeler.js");
var className = 'ElementCreateTagsResponse';

var ElementCreateTagsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateTagsResponse: {
      type: "TypeCreateTagsResponseType",
      wsdlDefinition: {
        name: "CreateTagsResponse",
        type: "tns:CreateTagsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateTagsResponse;
Modeler.register(ElementCreateTagsResponse, "ElementCreateTagsResponse");
