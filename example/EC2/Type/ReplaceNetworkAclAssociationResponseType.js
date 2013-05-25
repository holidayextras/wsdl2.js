var Modeler = require("../Modeler.js");
var className = 'TypeReplaceNetworkAclAssociationResponseType';

var TypeReplaceNetworkAclAssociationResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    newAssociationId: {
      type: "string",
      wsdlDefinition: {
        name: "newAssociationId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeReplaceNetworkAclAssociationResponseType;
Modeler.register(TypeReplaceNetworkAclAssociationResponseType, "TypeReplaceNetworkAclAssociationResponseType");
