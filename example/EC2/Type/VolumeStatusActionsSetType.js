var Modeler = require("../Modeler.js");
var className = 'TypeVolumeStatusActionsSetType';

var TypeVolumeStatusActionsSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeVolumeStatusActionItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:VolumeStatusActionItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVolumeStatusActionsSetType;
Modeler.register(TypeVolumeStatusActionsSetType, "TypeVolumeStatusActionsSetType");
