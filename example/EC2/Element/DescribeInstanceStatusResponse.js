var Modeler = require("../Modeler.js");
var className = 'ElementDescribeInstanceStatusResponse';

var ElementDescribeInstanceStatusResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeInstanceStatusResponse: {
      type: "TypeDescribeInstanceStatusResponseType",
      wsdlDefinition: {
        name: "DescribeInstanceStatusResponse",
        type: "tns:DescribeInstanceStatusResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeInstanceStatusResponse;
Modeler.register(ElementDescribeInstanceStatusResponse, "ElementDescribeInstanceStatusResponse");
