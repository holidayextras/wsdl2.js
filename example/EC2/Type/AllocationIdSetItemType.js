var Modeler = require("../Modeler.js");
var className = 'TypeAllocationIdSetItemType';

var TypeAllocationIdSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  allocationId: {
      type: "string",
      wsdlDefinition: {
        name: "allocationId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAllocationIdSetItemType;
Modeler.register(TypeAllocationIdSetItemType, "TypeAllocationIdSetItemType");
