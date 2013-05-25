var Modeler = require("../Modeler.js");
var className = 'TypeNetworkAclAssociationSetType';

var TypeNetworkAclAssociationSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeNetworkAclAssociationType",
      wsdlDefinition: {
        name: "item",
        type: "tns:NetworkAclAssociationType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeNetworkAclAssociationSetType;
Modeler.register(TypeNetworkAclAssociationSetType, "TypeNetworkAclAssociationSetType");
