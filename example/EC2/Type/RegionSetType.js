var Modeler = require("../Modeler.js");
var className = 'TypeRegionSetType';

var TypeRegionSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeRegionItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:RegionItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRegionSetType;
Modeler.register(TypeRegionSetType, "TypeRegionSetType");
