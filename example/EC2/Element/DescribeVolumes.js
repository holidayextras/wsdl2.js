var Modeler = require("../Modeler.js");
var className = 'ElementDescribeVolumes';

var ElementDescribeVolumes = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeVolumes: {
      type: "TypeDescribeVolumesType",
      wsdlDefinition: {
        name: "DescribeVolumes",
        type: "tns:DescribeVolumesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeVolumes;
Modeler.register(ElementDescribeVolumes, "ElementDescribeVolumes");
