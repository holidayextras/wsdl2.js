var Modeler = require("../Modeler.js");
var className = 'TypeInstanceBlockDeviceMappingType';

var TypeInstanceBlockDeviceMappingType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeInstanceBlockDeviceMappingItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:InstanceBlockDeviceMappingItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceBlockDeviceMappingType;
Modeler.register(TypeInstanceBlockDeviceMappingType, "TypeInstanceBlockDeviceMappingType");
