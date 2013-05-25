var Modeler = require("../Modeler.js");
var className = 'TypeImportInstanceVolumeDetailSetType';

var TypeImportInstanceVolumeDetailSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeImportInstanceVolumeDetailItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:ImportInstanceVolumeDetailItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeImportInstanceVolumeDetailSetType;
Modeler.register(TypeImportInstanceVolumeDetailSetType, "TypeImportInstanceVolumeDetailSetType");
