var Modeler = require("../Modeler.js");
var className = 'TypeDescribeCustomerGatewaysType';

var TypeDescribeCustomerGatewaysType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  customerGatewaySet: {
      type: "TypeCustomerGatewayIdSetType",
      wsdlDefinition: {
        name: "customerGatewaySet",
        type: "tns:CustomerGatewayIdSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    filterSet: {
      type: "TypeFilterSetType",
      wsdlDefinition: {
        name: "filterSet",
        type: "tns:FilterSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeCustomerGatewaysType;
Modeler.register(TypeDescribeCustomerGatewaysType, "TypeDescribeCustomerGatewaysType");
