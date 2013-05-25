var Modeler = require("../Modeler.js");
var className = 'ElementCreateNetworkAclEntryResponse';

var ElementCreateNetworkAclEntryResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateNetworkAclEntryResponse: {
      type: "TypeCreateNetworkAclEntryResponseType",
      wsdlDefinition: {
        name: "CreateNetworkAclEntryResponse",
        type: "tns:CreateNetworkAclEntryResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateNetworkAclEntryResponse;
Modeler.register(ElementCreateNetworkAclEntryResponse, "ElementCreateNetworkAclEntryResponse");
