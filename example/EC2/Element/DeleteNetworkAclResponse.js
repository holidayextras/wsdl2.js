var Modeler = require("../Modeler.js");
var className = 'ElementDeleteNetworkAclResponse';

var ElementDeleteNetworkAclResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteNetworkAclResponse: {
      type: "TypeDeleteNetworkAclResponseType",
      wsdlDefinition: {
        name: "DeleteNetworkAclResponse",
        type: "tns:DeleteNetworkAclResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteNetworkAclResponse;
Modeler.register(ElementDeleteNetworkAclResponse, "ElementDeleteNetworkAclResponse");
