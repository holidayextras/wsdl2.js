var Modeler = require("../Modeler.js");
var className = 'ElementDeleteInternetGatewayResponse';

var ElementDeleteInternetGatewayResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteInternetGatewayResponse: {
      type: "TypeDeleteInternetGatewayResponseType",
      wsdlDefinition: {
        name: "DeleteInternetGatewayResponse",
        type: "tns:DeleteInternetGatewayResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteInternetGatewayResponse;
Modeler.register(ElementDeleteInternetGatewayResponse, "ElementDeleteInternetGatewayResponse");
