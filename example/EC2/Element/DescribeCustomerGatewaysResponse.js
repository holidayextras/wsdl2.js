var Modeler = require("../Modeler.js");
var className = 'ElementDescribeCustomerGatewaysResponse';

var ElementDescribeCustomerGatewaysResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeCustomerGatewaysResponse: {
      type: "TypeDescribeCustomerGatewaysResponseType",
      wsdlDefinition: {
        name: "DescribeCustomerGatewaysResponse",
        type: "tns:DescribeCustomerGatewaysResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeCustomerGatewaysResponse;
Modeler.register(ElementDescribeCustomerGatewaysResponse, "ElementDescribeCustomerGatewaysResponse");
