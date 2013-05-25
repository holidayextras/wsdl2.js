var Modeler = require("../Modeler.js");
var className = 'ElementDescribeSpotInstanceRequestsResponse';

var ElementDescribeSpotInstanceRequestsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeSpotInstanceRequestsResponse: {
      type: "TypeDescribeSpotInstanceRequestsResponseType",
      wsdlDefinition: {
        name: "DescribeSpotInstanceRequestsResponse",
        type: "tns:DescribeSpotInstanceRequestsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeSpotInstanceRequestsResponse;
Modeler.register(ElementDescribeSpotInstanceRequestsResponse, "ElementDescribeSpotInstanceRequestsResponse");
