var Modeler = require("../Modeler.js");
var className = 'ElementDeleteNetworkAclEntryResponse';

var ElementDeleteNetworkAclEntryResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteNetworkAclEntryResponse: {
      type: "TypeDeleteNetworkAclEntryResponseType",
      wsdlDefinition: {
        name: "DeleteNetworkAclEntryResponse",
        type: "tns:DeleteNetworkAclEntryResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteNetworkAclEntryResponse;
Modeler.register(ElementDeleteNetworkAclEntryResponse, "ElementDeleteNetworkAclEntryResponse");
