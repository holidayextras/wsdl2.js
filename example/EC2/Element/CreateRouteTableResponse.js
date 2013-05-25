var Modeler = require("../Modeler.js");
var className = 'ElementCreateRouteTableResponse';

var ElementCreateRouteTableResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateRouteTableResponse: {
      type: "TypeCreateRouteTableResponseType",
      wsdlDefinition: {
        name: "CreateRouteTableResponse",
        type: "tns:CreateRouteTableResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateRouteTableResponse;
Modeler.register(ElementCreateRouteTableResponse, "ElementCreateRouteTableResponse");
