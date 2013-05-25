var Modeler = require("../Modeler.js");
var className = 'ElementDescribeImageAttributeResponse';

var ElementDescribeImageAttributeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeImageAttributeResponse: {
      type: "TypeDescribeImageAttributeResponseType",
      wsdlDefinition: {
        name: "DescribeImageAttributeResponse",
        type: "tns:DescribeImageAttributeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeImageAttributeResponse;
Modeler.register(ElementDescribeImageAttributeResponse, "ElementDescribeImageAttributeResponse");
