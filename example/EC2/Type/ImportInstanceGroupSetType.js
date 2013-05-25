var Modeler = require("../Modeler.js");
var className = 'TypeImportInstanceGroupSetType';

var TypeImportInstanceGroupSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeImportInstanceGroupItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:ImportInstanceGroupItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeImportInstanceGroupSetType;
Modeler.register(TypeImportInstanceGroupSetType, "TypeImportInstanceGroupSetType");
