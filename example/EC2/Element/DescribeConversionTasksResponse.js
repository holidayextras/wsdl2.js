var Modeler = require("../Modeler.js");
var className = 'ElementDescribeConversionTasksResponse';

var ElementDescribeConversionTasksResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeConversionTasksResponse: {
      type: "TypeDescribeConversionTasksResponseType",
      wsdlDefinition: {
        name: "DescribeConversionTasksResponse",
        type: "tns:DescribeConversionTasksResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeConversionTasksResponse;
Modeler.register(ElementDescribeConversionTasksResponse, "ElementDescribeConversionTasksResponse");
