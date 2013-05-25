var Modeler = require("../Modeler.js");
var className = 'TypeInstanceStateChangeSetType';

var TypeInstanceStateChangeSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeInstanceStateChangeType",
      wsdlDefinition: {
        name: "item",
        type: "tns:InstanceStateChangeType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceStateChangeSetType;
Modeler.register(TypeInstanceStateChangeSetType, "TypeInstanceStateChangeSetType");
