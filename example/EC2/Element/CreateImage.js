var Modeler = require("../Modeler.js");
var className = 'ElementCreateImage';

var ElementCreateImage = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateImage: {
      type: "TypeCreateImageType",
      wsdlDefinition: {
        name: "CreateImage",
        type: "tns:CreateImageType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateImage;
Modeler.register(ElementCreateImage, "ElementCreateImage");
