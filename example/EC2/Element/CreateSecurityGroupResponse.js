var Modeler = require("../Modeler.js");
var className = 'ElementCreateSecurityGroupResponse';

var ElementCreateSecurityGroupResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateSecurityGroupResponse: {
      type: "TypeCreateSecurityGroupResponseType",
      wsdlDefinition: {
        name: "CreateSecurityGroupResponse",
        type: "tns:CreateSecurityGroupResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateSecurityGroupResponse;
Modeler.register(ElementCreateSecurityGroupResponse, "ElementCreateSecurityGroupResponse");
