var Modeler = require("../Modeler.js");
var className = 'TypeDescribeImagesResponseInfoType';

var TypeDescribeImagesResponseInfoType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeImagesResponseItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeImagesResponseItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeImagesResponseInfoType;
Modeler.register(TypeDescribeImagesResponseInfoType, "TypeDescribeImagesResponseInfoType");
