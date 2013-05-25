var Modeler = require("../Modeler.js");
var className = 'ElementRevokeSecurityGroupEgress';

var ElementRevokeSecurityGroupEgress = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  RevokeSecurityGroupEgress: {
      type: "TypeRevokeSecurityGroupEgressType",
      wsdlDefinition: {
        name: "RevokeSecurityGroupEgress",
        type: "tns:RevokeSecurityGroupEgressType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRevokeSecurityGroupEgress;
Modeler.register(ElementRevokeSecurityGroupEgress, "ElementRevokeSecurityGroupEgress");
