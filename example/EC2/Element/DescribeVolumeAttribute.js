var Modeler = require("../Modeler.js");
var className = 'ElementDescribeVolumeAttribute';

var ElementDescribeVolumeAttribute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeVolumeAttribute: {
      type: "TypeDescribeVolumeAttributeType",
      wsdlDefinition: {
        name: "DescribeVolumeAttribute",
        type: "tns:DescribeVolumeAttributeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeVolumeAttribute;
Modeler.register(ElementDescribeVolumeAttribute, "ElementDescribeVolumeAttribute");
