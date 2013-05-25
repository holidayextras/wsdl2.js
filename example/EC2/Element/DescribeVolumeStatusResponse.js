var Modeler = require("../Modeler.js");
var className = 'ElementDescribeVolumeStatusResponse';

var ElementDescribeVolumeStatusResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeVolumeStatusResponse: {
      type: "TypeDescribeVolumeStatusResponseType",
      wsdlDefinition: {
        name: "DescribeVolumeStatusResponse",
        type: "tns:DescribeVolumeStatusResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeVolumeStatusResponse;
Modeler.register(ElementDescribeVolumeStatusResponse, "ElementDescribeVolumeStatusResponse");
