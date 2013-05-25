var Modeler = require("../Modeler.js");
var className = 'ElementDescribeVolumeStatus';

var ElementDescribeVolumeStatus = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeVolumeStatus: {
      type: "TypeDescribeVolumeStatusType",
      wsdlDefinition: {
        name: "DescribeVolumeStatus",
        type: "tns:DescribeVolumeStatusType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeVolumeStatus;
Modeler.register(ElementDescribeVolumeStatus, "ElementDescribeVolumeStatus");
