var Modeler = require("../Modeler.js");
var className = 'TypeCreateCustomerGatewayResponseType';

var TypeCreateCustomerGatewayResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    customerGateway: {
      type: "TypeCustomerGatewayType",
      wsdlDefinition: {
        name: "customerGateway",
        type: "tns:CustomerGatewayType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateCustomerGatewayResponseType;
Modeler.register(TypeCreateCustomerGatewayResponseType, "TypeCreateCustomerGatewayResponseType");
