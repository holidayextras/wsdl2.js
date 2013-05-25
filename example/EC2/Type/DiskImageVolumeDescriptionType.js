var Modeler = require("../Modeler.js");
var className = 'TypeDiskImageVolumeDescriptionType';

var TypeDiskImageVolumeDescriptionType = function(json, parentObj) {
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
    },
    id: {
      type: "string",
      wsdlDefinition: {
        name: "id",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDiskImageVolumeDescriptionType;
Modeler.register(TypeDiskImageVolumeDescriptionType, "TypeDiskImageVolumeDescriptionType");
