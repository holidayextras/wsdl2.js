var Modeler = require("../Modeler.js");
var className = 'ElementAuthorizeSecurityGroupEgress';

var ElementAuthorizeSecurityGroupEgress = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AuthorizeSecurityGroupEgress: {
      type: "TypeAuthorizeSecurityGroupEgressType",
      wsdlDefinition: {
        name: "AuthorizeSecurityGroupEgress",
        type: "tns:AuthorizeSecurityGroupEgressType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAuthorizeSecurityGroupEgress;
Modeler.register(ElementAuthorizeSecurityGroupEgress, "ElementAuthorizeSecurityGroupEgress");
