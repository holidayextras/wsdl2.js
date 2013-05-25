var Modeler = require("../Modeler.js");
var className = 'TypeSecurityGroupIdSetType';

var TypeSecurityGroupIdSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeSecurityGroupIdSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:SecurityGroupIdSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSecurityGroupIdSetType;
Modeler.register(TypeSecurityGroupIdSetType, "TypeSecurityGroupIdSetType");
