var Modeler = require("../Modeler.js");
var className = 'ElementDescribeInstancesResponse';

var ElementDescribeInstancesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeInstancesResponse: {
      type: "TypeDescribeInstancesResponseType",
      wsdlDefinition: {
        name: "DescribeInstancesResponse",
        type: "tns:DescribeInstancesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeInstancesResponse;
Modeler.register(ElementDescribeInstancesResponse, "ElementDescribeInstancesResponse");
