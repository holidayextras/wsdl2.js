var Modeler = require("../Modeler.js");
var className = 'TypeResourceTagSetType';

var TypeResourceTagSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeResourceTagSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:ResourceTagSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeResourceTagSetType;
Modeler.register(TypeResourceTagSetType, "TypeResourceTagSetType");
