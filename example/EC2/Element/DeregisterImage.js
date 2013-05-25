var Modeler = require("../Modeler.js");
var className = 'ElementDeregisterImage';

var ElementDeregisterImage = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeregisterImage: {
      type: "TypeDeregisterImageType",
      wsdlDefinition: {
        name: "DeregisterImage",
        type: "tns:DeregisterImageType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeregisterImage;
Modeler.register(ElementDeregisterImage, "ElementDeregisterImage");
