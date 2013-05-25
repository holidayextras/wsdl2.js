var Modeler = require("../Modeler.js");
var className = 'ElementCreateVolume';

var ElementCreateVolume = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateVolume: {
      type: "TypeCreateVolumeType",
      wsdlDefinition: {
        name: "CreateVolume",
        type: "tns:CreateVolumeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateVolume;
Modeler.register(ElementCreateVolume, "ElementCreateVolume");
