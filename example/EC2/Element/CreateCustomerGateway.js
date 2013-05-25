var Modeler = require("../Modeler.js");
var className = 'ElementCreateCustomerGateway';

var ElementCreateCustomerGateway = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateCustomerGateway: {
      type: "TypeCreateCustomerGatewayType",
      wsdlDefinition: {
        name: "CreateCustomerGateway",
        type: "tns:CreateCustomerGatewayType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateCustomerGateway;
Modeler.register(ElementCreateCustomerGateway, "ElementCreateCustomerGateway");
