var Modeler = require("../Modeler.js");
var className = 'ElementAttachVolume';

var ElementAttachVolume = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AttachVolume: {
      type: "TypeAttachVolumeType",
      wsdlDefinition: {
        name: "AttachVolume",
        type: "tns:AttachVolumeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAttachVolume;
Modeler.register(ElementAttachVolume, "ElementAttachVolume");
