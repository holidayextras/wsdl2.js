var Modeler = require("../Modeler.js");
var className = 'ElementDeleteNetworkAclEntry';

var ElementDeleteNetworkAclEntry = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteNetworkAclEntry: {
      type: "TypeDeleteNetworkAclEntryType",
      wsdlDefinition: {
        name: "DeleteNetworkAclEntry",
        type: "tns:DeleteNetworkAclEntryType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteNetworkAclEntry;
Modeler.register(ElementDeleteNetworkAclEntry, "ElementDeleteNetworkAclEntry");
