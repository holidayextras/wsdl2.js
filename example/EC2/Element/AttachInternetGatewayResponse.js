var Modeler = require("../Modeler.js");
var className = 'ElementAttachInternetGatewayResponse';

var ElementAttachInternetGatewayResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AttachInternetGatewayResponse: {
      type: "TypeAttachInternetGatewayResponseType",
      wsdlDefinition: {
        name: "AttachInternetGatewayResponse",
        type: "tns:AttachInternetGatewayResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAttachInternetGatewayResponse;
Modeler.register(ElementAttachInternetGatewayResponse, "ElementAttachInternetGatewayResponse");
