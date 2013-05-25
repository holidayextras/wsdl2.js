var Modeler = require("../Modeler.js");
var className = 'ElementDetachVolume';

var ElementDetachVolume = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DetachVolume: {
      type: "TypeDetachVolumeType",
      wsdlDefinition: {
        name: "DetachVolume",
        type: "tns:DetachVolumeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDetachVolume;
Modeler.register(ElementDetachVolume, "ElementDetachVolume");
