var Modeler = require("../Modeler.js");
var className = 'ElementDetachInternetGatewayResponse';

var ElementDetachInternetGatewayResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DetachInternetGatewayResponse: {
      type: "TypeDetachInternetGatewayResponseType",
      wsdlDefinition: {
        name: "DetachInternetGatewayResponse",
        type: "tns:DetachInternetGatewayResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDetachInternetGatewayResponse;
Modeler.register(ElementDetachInternetGatewayResponse, "ElementDetachInternetGatewayResponse");
