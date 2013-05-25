var Modeler = require("../Modeler.js");
var className = 'TypeNetworkAclEntrySetType';

var TypeNetworkAclEntrySetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeNetworkAclEntryType",
      wsdlDefinition: {
        name: "item",
        type: "tns:NetworkAclEntryType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeNetworkAclEntrySetType;
Modeler.register(TypeNetworkAclEntrySetType, "TypeNetworkAclEntrySetType");
