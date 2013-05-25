var Modeler = require("../Modeler.js");
var className = 'TypeReplaceNetworkAclAssociationType';

var TypeReplaceNetworkAclAssociationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  associationId: {
      type: "string",
      wsdlDefinition: {
        name: "associationId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    networkAclId: {
      type: "string",
      wsdlDefinition: {
        name: "networkAclId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeReplaceNetworkAclAssociationType;
Modeler.register(TypeReplaceNetworkAclAssociationType, "TypeReplaceNetworkAclAssociationType");
