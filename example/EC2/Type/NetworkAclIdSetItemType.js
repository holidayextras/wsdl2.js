var Modeler = require("../Modeler.js");
var className = 'TypeNetworkAclIdSetItemType';

var TypeNetworkAclIdSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
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

module.exports = TypeNetworkAclIdSetItemType;
Modeler.register(TypeNetworkAclIdSetItemType, "TypeNetworkAclIdSetItemType");
