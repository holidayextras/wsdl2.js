var Modeler = require("../Modeler.js");
var className = 'TypeAuthorizeSecurityGroupEgressType';

var TypeAuthorizeSecurityGroupEgressType = function(json, parentObj) {
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

module.exports = TypeAuthorizeSecurityGroupEgressType;
Modeler.register(TypeAuthorizeSecurityGroupEgressType, "TypeAuthorizeSecurityGroupEgressType");
