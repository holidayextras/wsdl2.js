var Modeler = require("../Modeler.js");
var className = 'TypeDescribeImagesType';

var TypeDescribeImagesType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  executableBySet: {
      type: "TypeDescribeImagesExecutableBySetType",
      wsdlDefinition: {
        name: "executableBySet",
        type: "tns:DescribeImagesExecutableBySetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    imagesSet: {
      type: "TypeDescribeImagesInfoType",
      wsdlDefinition: {
        name: "imagesSet",
        type: "tns:DescribeImagesInfoType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ownersSet: {
      type: "TypeDescribeImagesOwnersType",
      wsdlDefinition: {
        name: "ownersSet",
        type: "tns:DescribeImagesOwnersType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    filterSet: {
      type: "TypeFilterSetType",
      wsdlDefinition: {
        name: "filterSet",
        type: "tns:FilterSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeImagesType;
Modeler.register(TypeDescribeImagesType, "TypeDescribeImagesType");
