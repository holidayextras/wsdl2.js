var Modeler = require("../Modeler.js");
var className = 'TypeCustomerGatewayIdSetItemType';

var TypeCustomerGatewayIdSetItemType = function(json, parentObj) {
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

module.exports = TypeCustomerGatewayIdSetItemType;
Modeler.register(TypeCustomerGatewayIdSetItemType, "TypeCustomerGatewayIdSetItemType");
