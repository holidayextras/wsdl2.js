var Modeler = require("../Modeler.js");
var className = 'ElementAuthorizeSecurityGroupEgressResponse';

var ElementAuthorizeSecurityGroupEgressResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AuthorizeSecurityGroupEgressResponse: {
      type: "TypeAuthorizeSecurityGroupEgressResponseType",
      wsdlDefinition: {
        name: "AuthorizeSecurityGroupEgressResponse",
        type: "tns:AuthorizeSecurityGroupEgressResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAuthorizeSecurityGroupEgressResponse;
Modeler.register(ElementAuthorizeSecurityGroupEgressResponse, "ElementAuthorizeSecurityGroupEgressResponse");
