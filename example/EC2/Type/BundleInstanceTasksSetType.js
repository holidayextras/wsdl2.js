var Modeler = require("../Modeler.js");
var className = 'TypeBundleInstanceTasksSetType';

var TypeBundleInstanceTasksSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeBundleInstanceTaskType",
      wsdlDefinition: {
        name: "item",
        type: "tns:BundleInstanceTaskType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBundleInstanceTasksSetType;
Modeler.register(TypeBundleInstanceTasksSetType, "TypeBundleInstanceTasksSetType");
