var Modeler = require("../Modeler.js");
var className = 'TypeCustomerGatewayIdSetType';

var TypeCustomerGatewayIdSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeCustomerGatewayIdSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:CustomerGatewayIdSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomerGatewayIdSetType;
Modeler.register(TypeCustomerGatewayIdSetType, "TypeCustomerGatewayIdSetType");
