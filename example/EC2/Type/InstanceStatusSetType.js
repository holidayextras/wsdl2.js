var Modeler = require("../Modeler.js");
var className = 'TypeInstanceStatusSetType';

var TypeInstanceStatusSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeInstanceStatusItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:InstanceStatusItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceStatusSetType;
Modeler.register(TypeInstanceStatusSetType, "TypeInstanceStatusSetType");
