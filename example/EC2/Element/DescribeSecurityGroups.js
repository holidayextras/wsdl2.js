var Modeler = require("../Modeler.js");
var className = 'ElementDescribeSecurityGroups';

var ElementDescribeSecurityGroups = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeSecurityGroups: {
      type: "TypeDescribeSecurityGroupsType",
      wsdlDefinition: {
        name: "DescribeSecurityGroups",
        type: "tns:DescribeSecurityGroupsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeSecurityGroups;
Modeler.register(ElementDescribeSecurityGroups, "ElementDescribeSecurityGroups");
