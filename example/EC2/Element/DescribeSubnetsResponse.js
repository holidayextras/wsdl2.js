var Modeler = require("../Modeler.js");
var className = 'ElementDescribeSubnetsResponse';

var ElementDescribeSubnetsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeSubnetsResponse: {
      type: "TypeDescribeSubnetsResponseType",
      wsdlDefinition: {
        name: "DescribeSubnetsResponse",
        type: "tns:DescribeSubnetsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeSubnetsResponse;
Modeler.register(ElementDescribeSubnetsResponse, "ElementDescribeSubnetsResponse");
