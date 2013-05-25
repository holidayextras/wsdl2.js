var Modeler = require("../Modeler.js");
var className = 'TypeAccountAttributeSetType';

var TypeAccountAttributeSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeAccountAttributeSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:AccountAttributeSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAccountAttributeSetType;
Modeler.register(TypeAccountAttributeSetType, "TypeAccountAttributeSetType");
