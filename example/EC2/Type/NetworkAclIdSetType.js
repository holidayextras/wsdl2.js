var Modeler = require("../Modeler.js");
var className = 'TypeNetworkAclIdSetType';

var TypeNetworkAclIdSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeNetworkAclIdSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:NetworkAclIdSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeNetworkAclIdSetType;
Modeler.register(TypeNetworkAclIdSetType, "TypeNetworkAclIdSetType");
