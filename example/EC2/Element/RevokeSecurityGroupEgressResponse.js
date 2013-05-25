var Modeler = require("../Modeler.js");
var className = 'ElementRevokeSecurityGroupEgressResponse';

var ElementRevokeSecurityGroupEgressResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  RevokeSecurityGroupEgressResponse: {
      type: "TypeRevokeSecurityGroupEgressResponseType",
      wsdlDefinition: {
        name: "RevokeSecurityGroupEgressResponse",
        type: "tns:RevokeSecurityGroupEgressResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRevokeSecurityGroupEgressResponse;
Modeler.register(ElementRevokeSecurityGroupEgressResponse, "ElementRevokeSecurityGroupEgressResponse");
