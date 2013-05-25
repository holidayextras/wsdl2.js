var Modeler = require("../Modeler.js");
var className = 'TypeDeleteVolumeType';

var TypeDeleteVolumeType = function(json, parentObj) {
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

module.exports = TypeDeleteVolumeType;
Modeler.register(TypeDeleteVolumeType, "TypeDeleteVolumeType");
