var Modeler = require("../Modeler.js");
var className = 'TypeProductCodesSetType';

var TypeProductCodesSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeProductCodesSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:ProductCodesSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeProductCodesSetType;
Modeler.register(TypeProductCodesSetType, "TypeProductCodesSetType");
