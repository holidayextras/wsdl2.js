var Modeler = require("../Modeler.js");
var className = 'ElementDescribeCustomerGateways';

var ElementDescribeCustomerGateways = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeCustomerGateways: {
      type: "TypeDescribeCustomerGatewaysType",
      wsdlDefinition: {
        name: "DescribeCustomerGateways",
        type: "tns:DescribeCustomerGatewaysType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeCustomerGateways;
Modeler.register(ElementDescribeCustomerGateways, "ElementDescribeCustomerGateways");
