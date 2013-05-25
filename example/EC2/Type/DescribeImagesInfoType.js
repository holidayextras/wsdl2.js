var Modeler = require("../Modeler.js");
var className = 'TypeDescribeImagesInfoType';

var TypeDescribeImagesInfoType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeImagesItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeImagesItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeImagesInfoType;
Modeler.register(TypeDescribeImagesInfoType, "TypeDescribeImagesInfoType");
