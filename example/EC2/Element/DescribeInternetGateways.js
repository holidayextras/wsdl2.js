var Modeler = require("../Modeler.js");
var className = 'ElementDescribeInternetGateways';

var ElementDescribeInternetGateways = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeInternetGateways: {
      type: "TypeDescribeInternetGatewaysType",
      wsdlDefinition: {
        name: "DescribeInternetGateways",
        type: "tns:DescribeInternetGatewaysType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeInternetGateways;
Modeler.register(ElementDescribeInternetGateways, "ElementDescribeInternetGateways");
