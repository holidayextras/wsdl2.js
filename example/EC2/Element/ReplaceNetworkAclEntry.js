var Modeler = require("../Modeler.js");
var className = 'ElementReplaceNetworkAclEntry';

var ElementReplaceNetworkAclEntry = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ReplaceNetworkAclEntry: {
      type: "TypeReplaceNetworkAclEntryType",
      wsdlDefinition: {
        name: "ReplaceNetworkAclEntry",
        type: "tns:ReplaceNetworkAclEntryType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReplaceNetworkAclEntry;
Modeler.register(ElementReplaceNetworkAclEntry, "ElementReplaceNetworkAclEntry");
