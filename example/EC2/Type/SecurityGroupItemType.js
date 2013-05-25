var Modeler = require("../Modeler.js");
var className = 'TypeSecurityGroupItemType';

var TypeSecurityGroupItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ownerId: {
      type: "string",
      wsdlDefinition: {
        name: "ownerId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    groupId: {
      type: "string",
      wsdlDefinition: {
        name: "groupId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    groupName: {
      type: "string",
      wsdlDefinition: {
        name: "groupName",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    groupDescription: {
      type: "string",
      wsdlDefinition: {
        name: "groupDescription",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    vpcId: {
      type: "string",
      wsdlDefinition: {
        name: "vpcId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ipPermissions: {
      type: "TypeIpPermissionSetType",
      wsdlDefinition: {
        name: "ipPermissions",
        type: "tns:IpPermissionSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ipPermissionsEgress: {
      type: "TypeIpPermissionSetType",
      wsdlDefinition: {
        name: "ipPermissionsEgress",
        type: "tns:IpPermissionSetType",
        minOccurs: 0
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

module.exports = TypeSecurityGroupItemType;
Modeler.register(TypeSecurityGroupItemType, "TypeSecurityGroupItemType");
