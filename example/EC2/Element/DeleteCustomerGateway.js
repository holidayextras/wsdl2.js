var Modeler = require("../Modeler.js");
var className = 'ElementDeleteCustomerGateway';

var ElementDeleteCustomerGateway = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteCustomerGateway: {
      type: "TypeDeleteCustomerGatewayType",
      wsdlDefinition: {
        name: "DeleteCustomerGateway",
        type: "tns:DeleteCustomerGatewayType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteCustomerGateway;
Modeler.register(ElementDeleteCustomerGateway, "ElementDeleteCustomerGateway");
