var Modeler = require("../Modeler.js");
var className = 'TypeVolumeStatusDetailsSetType';

var TypeVolumeStatusDetailsSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeVolumeStatusDetailsItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:VolumeStatusDetailsItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVolumeStatusDetailsSetType;
Modeler.register(TypeVolumeStatusDetailsSetType, "TypeVolumeStatusDetailsSetType");
