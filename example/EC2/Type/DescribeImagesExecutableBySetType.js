var Modeler = require("../Modeler.js");
var className = 'TypeDescribeImagesExecutableBySetType';

var TypeDescribeImagesExecutableBySetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeImagesExecutableByType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeImagesExecutableByType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeImagesExecutableBySetType;
Modeler.register(TypeDescribeImagesExecutableBySetType, "TypeDescribeImagesExecutableBySetType");
