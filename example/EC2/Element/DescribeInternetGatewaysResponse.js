var Modeler = require("../Modeler.js");
var className = 'ElementDescribeInternetGatewaysResponse';

var ElementDescribeInternetGatewaysResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeInternetGatewaysResponse: {
      type: "TypeDescribeInternetGatewaysResponseType",
      wsdlDefinition: {
        name: "DescribeInternetGatewaysResponse",
        type: "tns:DescribeInternetGatewaysResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeInternetGatewaysResponse;
Modeler.register(ElementDescribeInternetGatewaysResponse, "ElementDescribeInternetGatewaysResponse");
