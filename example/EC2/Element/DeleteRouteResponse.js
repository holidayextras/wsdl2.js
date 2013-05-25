var Modeler = require("../Modeler.js");
var className = 'ElementDeleteRouteResponse';

var ElementDeleteRouteResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteRouteResponse: {
      type: "TypeDeleteRouteResponseType",
      wsdlDefinition: {
        name: "DeleteRouteResponse",
        type: "tns:DeleteRouteResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteRouteResponse;
Modeler.register(ElementDeleteRouteResponse, "ElementDeleteRouteResponse");
