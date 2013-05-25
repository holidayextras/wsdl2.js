var Modeler = require("../Modeler.js");
var className = 'ElementDeleteVolume';

var ElementDeleteVolume = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteVolume: {
      type: "TypeDeleteVolumeType",
      wsdlDefinition: {
        name: "DeleteVolume",
        type: "tns:DeleteVolumeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteVolume;
Modeler.register(ElementDeleteVolume, "ElementDeleteVolume");
