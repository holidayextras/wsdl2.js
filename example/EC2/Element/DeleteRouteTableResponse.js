var Modeler = require("../Modeler.js");
var className = 'ElementDeleteRouteTableResponse';

var ElementDeleteRouteTableResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteRouteTableResponse: {
      type: "TypeDeleteRouteTableResponseType",
      wsdlDefinition: {
        name: "DeleteRouteTableResponse",
        type: "tns:DeleteRouteTableResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteRouteTableResponse;
Modeler.register(ElementDeleteRouteTableResponse, "ElementDeleteRouteTableResponse");
