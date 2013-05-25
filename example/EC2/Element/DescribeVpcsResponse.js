var Modeler = require("../Modeler.js");
var className = 'ElementDescribeVpcsResponse';

var ElementDescribeVpcsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeVpcsResponse: {
      type: "TypeDescribeVpcsResponseType",
      wsdlDefinition: {
        name: "DescribeVpcsResponse",
        type: "tns:DescribeVpcsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeVpcsResponse;
Modeler.register(ElementDescribeVpcsResponse, "ElementDescribeVpcsResponse");
