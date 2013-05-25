var Modeler = require("../Modeler.js");
var className = 'TypeNetworkAclType';

var TypeNetworkAclType = function(json, parentObj) {
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
    },
    vpcId: {
      type: "string",
      wsdlDefinition: {
        name: "vpcId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    default: {
      type: "boolean",
      wsdlDefinition: {
        name: "default",
        type: "xs:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    entrySet: {
      type: "TypeNetworkAclEntrySetType",
      wsdlDefinition: {
        name: "entrySet",
        type: "tns:NetworkAclEntrySetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    associationSet: {
      type: "TypeNetworkAclAssociationSetType",
      wsdlDefinition: {
        name: "associationSet",
        type: "tns:NetworkAclAssociationSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    tagSet: {
      type: "TypeResourceTagSetType",
      wsdlDefinition: {
        name: "tagSet",
        type: "tns:ResourceTagSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeNetworkAclType;
Modeler.register(TypeNetworkAclType, "TypeNetworkAclType");
