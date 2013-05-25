var Modeler = require("../Modeler.js");
var className = 'TypeVolumeStatusEventsSetType';

var TypeVolumeStatusEventsSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeVolumeStatusEventItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:VolumeStatusEventItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVolumeStatusEventsSetType;
Modeler.register(TypeVolumeStatusEventsSetType, "TypeVolumeStatusEventsSetType");
