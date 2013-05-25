var Modeler = require("../Modeler.js");
var className = 'ElementReplaceRouteResponse';

var ElementReplaceRouteResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ReplaceRouteResponse: {
      type: "TypeReplaceRouteResponseType",
      wsdlDefinition: {
        name: "ReplaceRouteResponse",
        type: "tns:ReplaceRouteResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReplaceRouteResponse;
Modeler.register(ElementReplaceRouteResponse, "ElementReplaceRouteResponse");
