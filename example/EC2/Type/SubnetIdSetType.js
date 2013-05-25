var Modeler = require("../Modeler.js");
var className = 'TypeSubnetIdSetType';

var TypeSubnetIdSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeSubnetIdSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:SubnetIdSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSubnetIdSetType;
Modeler.register(TypeSubnetIdSetType, "TypeSubnetIdSetType");
