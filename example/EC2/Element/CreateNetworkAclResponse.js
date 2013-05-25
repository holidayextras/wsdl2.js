var Modeler = require("../Modeler.js");
var className = 'ElementCreateNetworkAclResponse';

var ElementCreateNetworkAclResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateNetworkAclResponse: {
      type: "TypeCreateNetworkAclResponseType",
      wsdlDefinition: {
        name: "CreateNetworkAclResponse",
        type: "tns:CreateNetworkAclResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateNetworkAclResponse;
Modeler.register(ElementCreateNetworkAclResponse, "ElementCreateNetworkAclResponse");
