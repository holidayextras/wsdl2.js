var Modeler = require("../Modeler.js");
var className = 'ElementDescribeTagsResponse';

var ElementDescribeTagsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeTagsResponse: {
      type: "TypeDescribeTagsResponseType",
      wsdlDefinition: {
        name: "DescribeTagsResponse",
        type: "tns:DescribeTagsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeTagsResponse;
Modeler.register(ElementDescribeTagsResponse, "ElementDescribeTagsResponse");
