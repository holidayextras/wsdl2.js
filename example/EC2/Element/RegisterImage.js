var Modeler = require("../Modeler.js");
var className = 'ElementRegisterImage';

var ElementRegisterImage = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  RegisterImage: {
      type: "TypeRegisterImageType",
      wsdlDefinition: {
        name: "RegisterImage",
        type: "tns:RegisterImageType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRegisterImage;
Modeler.register(ElementRegisterImage, "ElementRegisterImage");
