var Modeler = require("../Modeler.js");
var className = 'TypeVolumeStatusSetType';

var TypeVolumeStatusSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeVolumeStatusItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:VolumeStatusItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVolumeStatusSetType;
Modeler.register(TypeVolumeStatusSetType, "TypeVolumeStatusSetType");
