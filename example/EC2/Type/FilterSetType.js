var Modeler = require("../Modeler.js");
var className = 'TypeFilterSetType';

var TypeFilterSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeFilterType",
      wsdlDefinition: {
        name: "item",
        type: "tns:FilterType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFilterSetType;
Modeler.register(TypeFilterSetType, "TypeFilterSetType");
