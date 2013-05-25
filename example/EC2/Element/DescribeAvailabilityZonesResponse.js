var Modeler = require("../Modeler.js");
var className = 'ElementDescribeAvailabilityZonesResponse';

var ElementDescribeAvailabilityZonesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeAvailabilityZonesResponse: {
      type: "TypeDescribeAvailabilityZonesResponseType",
      wsdlDefinition: {
        name: "DescribeAvailabilityZonesResponse",
        type: "tns:DescribeAvailabilityZonesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeAvailabilityZonesResponse;
Modeler.register(ElementDescribeAvailabilityZonesResponse, "ElementDescribeAvailabilityZonesResponse");
