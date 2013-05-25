var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSecurityGroupsIdSetItemType';

var TypeDescribeSecurityGroupsIdSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  groupId: {
      type: "string",
      wsdlDefinition: {
        name: "groupId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeSecurityGroupsIdSetItemType;
Modeler.register(TypeDescribeSecurityGroupsIdSetItemType, "TypeDescribeSecurityGroupsIdSetItemType");
