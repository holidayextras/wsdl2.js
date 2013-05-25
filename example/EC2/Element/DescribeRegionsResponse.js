var Modeler = require("../Modeler.js");
var className = 'ElementDescribeRegionsResponse';

var ElementDescribeRegionsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeRegionsResponse: {
      type: "TypeDescribeRegionsResponseType",
      wsdlDefinition: {
        name: "DescribeRegionsResponse",
        type: "tns:DescribeRegionsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeRegionsResponse;
Modeler.register(ElementDescribeRegionsResponse, "ElementDescribeRegionsResponse");
