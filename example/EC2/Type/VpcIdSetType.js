var Modeler = require("../Modeler.js");
var className = 'TypeVpcIdSetType';

var TypeVpcIdSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeVpcIdSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:VpcIdSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVpcIdSetType;
Modeler.register(TypeVpcIdSetType, "TypeVpcIdSetType");
