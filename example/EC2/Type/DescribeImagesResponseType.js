var Modeler = require("../Modeler.js");
var className = 'TypeDescribeImagesResponseType';

var TypeDescribeImagesResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    imagesSet: {
      type: "TypeDescribeImagesResponseInfoType",
      wsdlDefinition: {
        name: "imagesSet",
        type: "tns:DescribeImagesResponseInfoType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeImagesResponseType;
Modeler.register(TypeDescribeImagesResponseType, "TypeDescribeImagesResponseType");
