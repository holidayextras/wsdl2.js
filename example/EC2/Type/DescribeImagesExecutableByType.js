var Modeler = require("../Modeler.js");
var className = 'TypeDescribeImagesExecutableByType';

var TypeDescribeImagesExecutableByType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  user: {
      type: "string",
      wsdlDefinition: {
        name: "user",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeImagesExecutableByType;
Modeler.register(TypeDescribeImagesExecutableByType, "TypeDescribeImagesExecutableByType");
