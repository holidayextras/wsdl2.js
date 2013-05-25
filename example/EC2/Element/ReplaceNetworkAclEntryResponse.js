var Modeler = require("../Modeler.js");
var className = 'ElementReplaceNetworkAclEntryResponse';

var ElementReplaceNetworkAclEntryResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ReplaceNetworkAclEntryResponse: {
      type: "TypeReplaceNetworkAclEntryResponseType",
      wsdlDefinition: {
        name: "ReplaceNetworkAclEntryResponse",
        type: "tns:ReplaceNetworkAclEntryResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReplaceNetworkAclEntryResponse;
Modeler.register(ElementReplaceNetworkAclEntryResponse, "ElementReplaceNetworkAclEntryResponse");
