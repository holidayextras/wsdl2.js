var Modeler = require("../Modeler.js");
var className = 'TypeModifyVolumeAttributeType';

var TypeModifyVolumeAttributeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  autoEnableIO: {
      type: "TypeAttributeBooleanValueType",
      wsdlDefinition: {
        name: "autoEnableIO",
        type: "tns:AttributeBooleanValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeModifyVolumeAttributeType;
Modeler.register(TypeModifyVolumeAttributeType, "TypeModifyVolumeAttributeType");
