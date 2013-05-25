var Modeler = require("../Modeler.js");
var className = 'ElementReplaceNetworkAclAssociation';

var ElementReplaceNetworkAclAssociation = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ReplaceNetworkAclAssociation: {
      type: "TypeReplaceNetworkAclAssociationType",
      wsdlDefinition: {
        name: "ReplaceNetworkAclAssociation",
        type: "tns:ReplaceNetworkAclAssociationType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReplaceNetworkAclAssociation;
Modeler.register(ElementReplaceNetworkAclAssociation, "ElementReplaceNetworkAclAssociation");
