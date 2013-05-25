var Modeler = require("../Modeler.js");
var className = 'ElementRevokeSecurityGroupIngressResponse';

var ElementRevokeSecurityGroupIngressResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  RevokeSecurityGroupIngressResponse: {
      type: "TypeRevokeSecurityGroupIngressResponseType",
      wsdlDefinition: {
        name: "RevokeSecurityGroupIngressResponse",
        type: "tns:RevokeSecurityGroupIngressResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRevokeSecurityGroupIngressResponse;
Modeler.register(ElementRevokeSecurityGroupIngressResponse, "ElementRevokeSecurityGroupIngressResponse");
