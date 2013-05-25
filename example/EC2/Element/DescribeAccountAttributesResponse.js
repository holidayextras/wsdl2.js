var Modeler = require("../Modeler.js");
var className = 'ElementDescribeAccountAttributesResponse';

var ElementDescribeAccountAttributesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeAccountAttributesResponse: {
      type: "TypeDescribeAccountAttributesResponseType",
      wsdlDefinition: {
        name: "DescribeAccountAttributesResponse",
        type: "tns:DescribeAccountAttributesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeAccountAttributesResponse;
Modeler.register(ElementDescribeAccountAttributesResponse, "ElementDescribeAccountAttributesResponse");
