var Modeler = require("../Modeler.js");
var className = 'ElementRevokeSecurityGroupIngress';

var ElementRevokeSecurityGroupIngress = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  RevokeSecurityGroupIngress: {
      type: "TypeRevokeSecurityGroupIngressType",
      wsdlDefinition: {
        name: "RevokeSecurityGroupIngress",
        type: "tns:RevokeSecurityGroupIngressType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRevokeSecurityGroupIngress;
Modeler.register(ElementRevokeSecurityGroupIngress, "ElementRevokeSecurityGroupIngress");
