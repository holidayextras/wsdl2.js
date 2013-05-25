var Modeler = require("../Modeler.js");
var className = 'TypeDescribeImagesOwnersType';

var TypeDescribeImagesOwnersType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeImagesOwnerType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeImagesOwnerType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeImagesOwnersType;
Modeler.register(TypeDescribeImagesOwnersType, "TypeDescribeImagesOwnersType");
