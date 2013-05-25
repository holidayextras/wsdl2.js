var Modeler = require("../Modeler.js");
var className = 'ElementCreateRouteResponse';

var ElementCreateRouteResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateRouteResponse: {
      type: "TypeCreateRouteResponseType",
      wsdlDefinition: {
        name: "CreateRouteResponse",
        type: "tns:CreateRouteResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateRouteResponse;
Modeler.register(ElementCreateRouteResponse, "ElementCreateRouteResponse");
