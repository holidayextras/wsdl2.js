var Modeler = require("../Modeler.js");
var className = 'ElementEnableVolumeIO';

var ElementEnableVolumeIO = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  EnableVolumeIO: {
      type: "TypeEnableVolumeIOType",
      wsdlDefinition: {
        name: "EnableVolumeIO",
        type: "tns:EnableVolumeIOType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEnableVolumeIO;
Modeler.register(ElementEnableVolumeIO, "ElementEnableVolumeIO");
