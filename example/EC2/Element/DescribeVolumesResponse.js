var Modeler = require("../Modeler.js");
var className = 'ElementDescribeVolumesResponse';

var ElementDescribeVolumesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeVolumesResponse: {
      type: "TypeDescribeVolumesResponseType",
      wsdlDefinition: {
        name: "DescribeVolumesResponse",
        type: "tns:DescribeVolumesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeVolumesResponse;
Modeler.register(ElementDescribeVolumesResponse, "ElementDescribeVolumesResponse");
