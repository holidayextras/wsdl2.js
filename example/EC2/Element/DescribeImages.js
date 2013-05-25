var Modeler = require("../Modeler.js");
var className = 'ElementDescribeImages';

var ElementDescribeImages = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeImages: {
      type: "TypeDescribeImagesType",
      wsdlDefinition: {
        name: "DescribeImages",
        type: "tns:DescribeImagesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeImages;
Modeler.register(ElementDescribeImages, "ElementDescribeImages");
