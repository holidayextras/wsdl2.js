var Modeler = require("../Modeler.js");
var className = 'TypeDiskImageVolumeType';

var TypeDiskImageVolumeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  size: {
      type: "Typeinteger",
      wsdlDefinition: {
        name: "size",
        type: "xs:integer"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDiskImageVolumeType;
Modeler.register(TypeDiskImageVolumeType, "TypeDiskImageVolumeType");
