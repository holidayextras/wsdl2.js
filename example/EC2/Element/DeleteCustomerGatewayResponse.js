var Modeler = require("../Modeler.js");
var className = 'ElementDeleteCustomerGatewayResponse';

var ElementDeleteCustomerGatewayResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteCustomerGatewayResponse: {
      type: "TypeDeleteCustomerGatewayResponseType",
      wsdlDefinition: {
        name: "DeleteCustomerGatewayResponse",
        type: "tns:DeleteCustomerGatewayResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteCustomerGatewayResponse;
Modeler.register(ElementDeleteCustomerGatewayResponse, "ElementDeleteCustomerGatewayResponse");
