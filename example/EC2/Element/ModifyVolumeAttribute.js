var Modeler = require("../Modeler.js");
var className = 'ElementModifyVolumeAttribute';

var ElementModifyVolumeAttribute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ModifyVolumeAttribute: {
      type: "TypeModifyVolumeAttributeType",
      wsdlDefinition: {
        name: "ModifyVolumeAttribute",
        type: "tns:ModifyVolumeAttributeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementModifyVolumeAttribute;
Modeler.register(ElementModifyVolumeAttribute, "ElementModifyVolumeAttribute");
