var Modeler = require("../Modeler.js");
var className = 'TypeVpcSetType';

var TypeVpcSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeVpcType",
      wsdlDefinition: {
        name: "item",
        type: "tns:VpcType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVpcSetType;
Modeler.register(TypeVpcSetType, "TypeVpcSetType");
