var Modeler = require("../Modeler.js");
var className = 'ElementDescribeImagesResponse';

var ElementDescribeImagesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeImagesResponse: {
      type: "TypeDescribeImagesResponseType",
      wsdlDefinition: {
        name: "DescribeImagesResponse",
        type: "tns:DescribeImagesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeImagesResponse;
Modeler.register(ElementDescribeImagesResponse, "ElementDescribeImagesResponse");
