var Modeler = require("../Modeler.js");
var className = 'TypeInstanceTypeSetType';

var TypeInstanceTypeSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeInstanceTypeSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:InstanceTypeSetItemType",
        minOccurs: 1,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: true
    }
	}, parentObj, json);
};

module.exports = TypeInstanceTypeSetType;
Modeler.register(TypeInstanceTypeSetType, "TypeInstanceTypeSetType");
