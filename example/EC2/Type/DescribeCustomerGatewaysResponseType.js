var Modeler = require("../Modeler.js");
var className = 'TypeDescribeCustomerGatewaysResponseType';

var TypeDescribeCustomerGatewaysResponseType = function(json, parentObj) {
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
    customerGatewaySet: {
      type: "TypeCustomerGatewaySetType",
      wsdlDefinition: {
        name: "customerGatewaySet",
        type: "tns:CustomerGatewaySetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeCustomerGatewaysResponseType;
Modeler.register(TypeDescribeCustomerGatewaysResponseType, "TypeDescribeCustomerGatewaysResponseType");
