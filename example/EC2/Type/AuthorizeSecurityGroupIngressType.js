var Modeler = require("../Modeler.js");
var className = 'TypeAuthorizeSecurityGroupIngressType';

var TypeAuthorizeSecurityGroupIngressType = function(json, parentObj) {
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
    groupName: {
      type: "string",
      wsdlDefinition: {
        name: "groupName",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAuthorizeSecurityGroupIngressType;
Modeler.register(TypeAuthorizeSecurityGroupIngressType, "TypeAuthorizeSecurityGroupIngressType");
