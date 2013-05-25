var Modeler = require("../Modeler.js");
var className = 'ElementImportVolume';

var ElementImportVolume = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ImportVolume: {
      type: "TypeImportVolumeType",
      wsdlDefinition: {
        name: "ImportVolume",
        type: "tns:ImportVolumeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementImportVolume;
Modeler.register(ElementImportVolume, "ElementImportVolume");
