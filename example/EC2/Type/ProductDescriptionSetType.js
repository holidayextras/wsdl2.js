var Modeler = require("../Modeler.js");
var className = 'TypeProductDescriptionSetType';

var TypeProductDescriptionSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeProductDescriptionSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:ProductDescriptionSetItemType",
        minOccurs: 1,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: true
    }
	}, parentObj, json);
};

module.exports = TypeProductDescriptionSetType;
Modeler.register(TypeProductDescriptionSetType, "TypeProductDescriptionSetType");
