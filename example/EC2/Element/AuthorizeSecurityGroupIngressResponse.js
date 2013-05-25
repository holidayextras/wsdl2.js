var Modeler = require("../Modeler.js");
var className = 'ElementAuthorizeSecurityGroupIngressResponse';

var ElementAuthorizeSecurityGroupIngressResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AuthorizeSecurityGroupIngressResponse: {
      type: "TypeAuthorizeSecurityGroupIngressResponseType",
      wsdlDefinition: {
        name: "AuthorizeSecurityGroupIngressResponse",
        type: "tns:AuthorizeSecurityGroupIngressResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAuthorizeSecurityGroupIngressResponse;
Modeler.register(ElementAuthorizeSecurityGroupIngressResponse, "ElementAuthorizeSecurityGroupIngressResponse");
