var Modeler = require("../Modeler.js");
var className = 'TypeDescribeImagesOwnerType';

var TypeDescribeImagesOwnerType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  owner: {
      type: "string",
      wsdlDefinition: {
        name: "owner",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeImagesOwnerType;
Modeler.register(TypeDescribeImagesOwnerType, "TypeDescribeImagesOwnerType");
