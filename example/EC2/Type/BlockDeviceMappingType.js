var Modeler = require("../Modeler.js");
var className = 'TypeBlockDeviceMappingType';

var TypeBlockDeviceMappingType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeBlockDeviceMappingItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:BlockDeviceMappingItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBlockDeviceMappingType;
Modeler.register(TypeBlockDeviceMappingType, "TypeBlockDeviceMappingType");
