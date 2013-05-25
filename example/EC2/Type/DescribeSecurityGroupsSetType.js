var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSecurityGroupsSetType';

var TypeDescribeSecurityGroupsSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeSecurityGroupsSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeSecurityGroupsSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeSecurityGroupsSetType;
Modeler.register(TypeDescribeSecurityGroupsSetType, "TypeDescribeSecurityGroupsSetType");
