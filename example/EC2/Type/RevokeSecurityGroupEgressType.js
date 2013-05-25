var Modeler = require("../Modeler.js");
var className = 'TypeRevokeSecurityGroupEgressType';

var TypeRevokeSecurityGroupEgressType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  groupId: {
      type: "string",
      wsdlDefinition: {
        name: "groupId",
        type: "xs:string"
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
    }
	}, parentObj, json);
};

module.exports = TypeRevokeSecurityGroupEgressType;
Modeler.register(TypeRevokeSecurityGroupEgressType, "TypeRevokeSecurityGroupEgressType");
