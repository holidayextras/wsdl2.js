var Modeler = require("../Modeler.js");
var className = 'TypeDeleteTagsSetType';

var TypeDeleteTagsSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDeleteTagsSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DeleteTagsSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDeleteTagsSetType;
Modeler.register(TypeDeleteTagsSetType, "TypeDeleteTagsSetType");
