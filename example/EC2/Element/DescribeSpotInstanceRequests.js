var Modeler = require("../Modeler.js");
var className = 'ElementDescribeSpotInstanceRequests';

var ElementDescribeSpotInstanceRequests = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeSpotInstanceRequests: {
      type: "TypeDescribeSpotInstanceRequestsType",
      wsdlDefinition: {
        name: "DescribeSpotInstanceRequests",
        type: "tns:DescribeSpotInstanceRequestsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeSpotInstanceRequests;
Modeler.register(ElementDescribeSpotInstanceRequests, "ElementDescribeSpotInstanceRequests");
