var Modeler = require("../Modeler.js");
var className = 'ElementCreateInternetGatewayResponse';

var ElementCreateInternetGatewayResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateInternetGatewayResponse: {
      type: "TypeCreateInternetGatewayResponseType",
      wsdlDefinition: {
        name: "CreateInternetGatewayResponse",
        type: "tns:CreateInternetGatewayResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateInternetGatewayResponse;
Modeler.register(ElementCreateInternetGatewayResponse, "ElementCreateInternetGatewayResponse");
