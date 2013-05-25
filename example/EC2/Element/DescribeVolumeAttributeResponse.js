var Modeler = require("../Modeler.js");
var className = 'ElementDescribeVolumeAttributeResponse';

var ElementDescribeVolumeAttributeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeVolumeAttributeResponse: {
      type: "TypeDescribeVolumeAttributeResponseType",
      wsdlDefinition: {
        name: "DescribeVolumeAttributeResponse",
        type: "tns:DescribeVolumeAttributeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeVolumeAttributeResponse;
Modeler.register(ElementDescribeVolumeAttributeResponse, "ElementDescribeVolumeAttributeResponse");
