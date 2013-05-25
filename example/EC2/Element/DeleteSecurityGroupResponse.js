var Modeler = require("../Modeler.js");
var className = 'ElementDeleteSecurityGroupResponse';

var ElementDeleteSecurityGroupResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteSecurityGroupResponse: {
      type: "TypeDeleteSecurityGroupResponseType",
      wsdlDefinition: {
        name: "DeleteSecurityGroupResponse",
        type: "tns:DeleteSecurityGroupResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteSecurityGroupResponse;
Modeler.register(ElementDeleteSecurityGroupResponse, "ElementDeleteSecurityGroupResponse");
