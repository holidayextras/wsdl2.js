var Modeler = require("../Modeler.js");
var className = 'ElementAuthorizeSecurityGroupIngress';

var ElementAuthorizeSecurityGroupIngress = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AuthorizeSecurityGroupIngress: {
      type: "TypeAuthorizeSecurityGroupIngressType",
      wsdlDefinition: {
        name: "AuthorizeSecurityGroupIngress",
        type: "tns:AuthorizeSecurityGroupIngressType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAuthorizeSecurityGroupIngress;
Modeler.register(ElementAuthorizeSecurityGroupIngress, "ElementAuthorizeSecurityGroupIngress");
