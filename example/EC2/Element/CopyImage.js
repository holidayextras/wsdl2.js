var Modeler = require("../Modeler.js");
var className = 'ElementCopyImage';

var ElementCopyImage = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CopyImage: {
      type: "TypeCopyImageType",
      wsdlDefinition: {
        name: "CopyImage",
        type: "tns:CopyImageType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCopyImage;
Modeler.register(ElementCopyImage, "ElementCopyImage");
