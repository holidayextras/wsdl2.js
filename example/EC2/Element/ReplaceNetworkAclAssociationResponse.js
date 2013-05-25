var Modeler = require("../Modeler.js");
var className = 'ElementReplaceNetworkAclAssociationResponse';

var ElementReplaceNetworkAclAssociationResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ReplaceNetworkAclAssociationResponse: {
      type: "TypeReplaceNetworkAclAssociationResponseType",
      wsdlDefinition: {
        name: "ReplaceNetworkAclAssociationResponse",
        type: "tns:ReplaceNetworkAclAssociationResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReplaceNetworkAclAssociationResponse;
Modeler.register(ElementReplaceNetworkAclAssociationResponse, "ElementReplaceNetworkAclAssociationResponse");
