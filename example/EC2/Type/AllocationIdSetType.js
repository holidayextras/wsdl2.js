var Modeler = require("../Modeler.js");
var className = 'TypeAllocationIdSetType';

var TypeAllocationIdSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeAllocationIdSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:AllocationIdSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAllocationIdSetType;
Modeler.register(TypeAllocationIdSetType, "TypeAllocationIdSetType");
