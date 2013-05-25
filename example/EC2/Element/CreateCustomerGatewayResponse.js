var Modeler = require("../Modeler.js");
var className = 'ElementCreateCustomerGatewayResponse';

var ElementCreateCustomerGatewayResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateCustomerGatewayResponse: {
      type: "TypeCreateCustomerGatewayResponseType",
      wsdlDefinition: {
        name: "CreateCustomerGatewayResponse",
        type: "tns:CreateCustomerGatewayResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateCustomerGatewayResponse;
Modeler.register(ElementCreateCustomerGatewayResponse, "ElementCreateCustomerGatewayResponse");
