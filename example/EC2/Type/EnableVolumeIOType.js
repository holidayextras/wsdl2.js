var Modeler = require("../Modeler.js");
var className = 'TypeEnableVolumeIOType';

var TypeEnableVolumeIOType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  volumeId: {
      type: "string",
      wsdlDefinition: {
        name: "volumeId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeEnableVolumeIOType;
Modeler.register(TypeEnableVolumeIOType, "TypeEnableVolumeIOType");
