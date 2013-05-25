var Modeler = require("../Modeler.js");
var className = 'TypeDeleteCustomerGatewayType';

var TypeDeleteCustomerGatewayType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  customerGatewayId: {
      type: "string",
      wsdlDefinition: {
        name: "customerGatewayId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDeleteCustomerGatewayType;
Modeler.register(TypeDeleteCustomerGatewayType, "TypeDeleteCustomerGatewayType");
