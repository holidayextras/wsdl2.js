var Modeler = require("../Modeler.js");
var className = 'ElementDescribeInstanceAttributeResponse';

var ElementDescribeInstanceAttributeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeInstanceAttributeResponse: {
      type: "TypeDescribeInstanceAttributeResponseType",
      wsdlDefinition: {
        name: "DescribeInstanceAttributeResponse",
        type: "tns:DescribeInstanceAttributeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeInstanceAttributeResponse;
Modeler.register(ElementDescribeInstanceAttributeResponse, "ElementDescribeInstanceAttributeResponse");
