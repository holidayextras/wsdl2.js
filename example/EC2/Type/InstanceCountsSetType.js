var Modeler = require("../Modeler.js");
var className = 'TypeInstanceCountsSetType';

var TypeInstanceCountsSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeInstanceCountsSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:InstanceCountsSetItemType",
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceCountsSetType;
Modeler.register(TypeInstanceCountsSetType, "TypeInstanceCountsSetType");
