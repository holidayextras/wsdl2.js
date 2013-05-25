var Modeler = require("../Modeler.js");
var className = 'TypeGroupSetType';

var TypeGroupSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeGroupItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:GroupItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeGroupSetType;
Modeler.register(TypeGroupSetType, "TypeGroupSetType");
