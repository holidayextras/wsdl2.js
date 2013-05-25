var Modeler = require("../Modeler.js");
var className = 'TypeInstanceStatusDetailsSetType';

var TypeInstanceStatusDetailsSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeInstanceStatusDetailsSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:InstanceStatusDetailsSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceStatusDetailsSetType;
Modeler.register(TypeInstanceStatusDetailsSetType, "TypeInstanceStatusDetailsSetType");
