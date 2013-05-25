var Modeler = require("../Modeler.js");
var className = 'TypeVolumeStatusInfoType';

var TypeVolumeStatusInfoType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  status: {
      type: "string",
      wsdlDefinition: {
        name: "status",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    details: {
      type: "TypeVolumeStatusDetailsSetType",
      wsdlDefinition: {
        name: "details",
        type: "tns:VolumeStatusDetailsSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVolumeStatusInfoType;
Modeler.register(TypeVolumeStatusInfoType, "TypeVolumeStatusInfoType");
