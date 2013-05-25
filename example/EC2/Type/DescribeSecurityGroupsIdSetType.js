var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSecurityGroupsIdSetType';

var TypeDescribeSecurityGroupsIdSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeSecurityGroupsIdSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeSecurityGroupsIdSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeSecurityGroupsIdSetType;
Modeler.register(TypeDescribeSecurityGroupsIdSetType, "TypeDescribeSecurityGroupsIdSetType");
