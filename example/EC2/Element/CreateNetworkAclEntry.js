var Modeler = require("../Modeler.js");
var className = 'ElementCreateNetworkAclEntry';

var ElementCreateNetworkAclEntry = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateNetworkAclEntry: {
      type: "TypeCreateNetworkAclEntryType",
      wsdlDefinition: {
        name: "CreateNetworkAclEntry",
        type: "tns:CreateNetworkAclEntryType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateNetworkAclEntry;
Modeler.register(ElementCreateNetworkAclEntry, "ElementCreateNetworkAclEntry");
