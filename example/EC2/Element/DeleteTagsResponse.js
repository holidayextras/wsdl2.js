var Modeler = require("../Modeler.js");
var className = 'ElementDeleteTagsResponse';

var ElementDeleteTagsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteTagsResponse: {
      type: "TypeDeleteTagsResponseType",
      wsdlDefinition: {
        name: "DeleteTagsResponse",
        type: "tns:DeleteTagsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteTagsResponse;
Modeler.register(ElementDeleteTagsResponse, "ElementDeleteTagsResponse");
