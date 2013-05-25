var Modeler = require("../Modeler.js");
var className = 'ElementCreateSecurityGroup';

var ElementCreateSecurityGroup = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateSecurityGroup: {
      type: "TypeCreateSecurityGroupType",
      wsdlDefinition: {
        name: "CreateSecurityGroup",
        type: "tns:CreateSecurityGroupType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateSecurityGroup;
Modeler.register(ElementCreateSecurityGroup, "ElementCreateSecurityGroup");
