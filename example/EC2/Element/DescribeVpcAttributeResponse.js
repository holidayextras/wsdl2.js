var Modeler = require("../Modeler.js");
var className = 'ElementDescribeVpcAttributeResponse';

var ElementDescribeVpcAttributeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeVpcAttributeResponse: {
      type: "TypeDescribeVpcAttributeResponseType",
      wsdlDefinition: {
        name: "DescribeVpcAttributeResponse",
        type: "tns:DescribeVpcAttributeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeVpcAttributeResponse;
Modeler.register(ElementDescribeVpcAttributeResponse, "ElementDescribeVpcAttributeResponse");
