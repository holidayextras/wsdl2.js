var Modeler = require("../Modeler.js");
var className = 'TypeRunningInstancesSetType';

var TypeRunningInstancesSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeRunningInstancesItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:RunningInstancesItemType",
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRunningInstancesSetType;
Modeler.register(TypeRunningInstancesSetType, "TypeRunningInstancesSetType");
