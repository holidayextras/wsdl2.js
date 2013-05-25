var Modeler = require("../Modeler.js");
var className = 'ElementDeleteSecurityGroup';

var ElementDeleteSecurityGroup = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteSecurityGroup: {
      type: "TypeDeleteSecurityGroupType",
      wsdlDefinition: {
        name: "DeleteSecurityGroup",
        type: "tns:DeleteSecurityGroupType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteSecurityGroup;
Modeler.register(ElementDeleteSecurityGroup, "ElementDeleteSecurityGroup");
