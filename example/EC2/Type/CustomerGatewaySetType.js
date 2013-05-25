var Modeler = require("../Modeler.js");
var className = 'TypeCustomerGatewaySetType';

var TypeCustomerGatewaySetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeCustomerGatewayType",
      wsdlDefinition: {
        name: "item",
        type: "tns:CustomerGatewayType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomerGatewaySetType;
Modeler.register(TypeCustomerGatewaySetType, "TypeCustomerGatewaySetType");
