var Modeler = require("../Modeler.js");
var className = 'ElementDisassociateRouteTableResponse';

var ElementDisassociateRouteTableResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DisassociateRouteTableResponse: {
      type: "TypeDisassociateRouteTableResponseType",
      wsdlDefinition: {
        name: "DisassociateRouteTableResponse",
        type: "tns:DisassociateRouteTableResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDisassociateRouteTableResponse;
Modeler.register(ElementDisassociateRouteTableResponse, "ElementDisassociateRouteTableResponse");
