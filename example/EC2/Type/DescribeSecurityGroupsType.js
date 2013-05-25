var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSecurityGroupsType';

var TypeDescribeSecurityGroupsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  securityGroupSet: {
      type: "TypeDescribeSecurityGroupsSetType",
      wsdlDefinition: {
        name: "securityGroupSet",
        type: "tns:DescribeSecurityGroupsSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    securityGroupIdSet: {
      type: "TypeDescribeSecurityGroupsIdSetType",
      wsdlDefinition: {
        name: "securityGroupIdSet",
        type: "tns:DescribeSecurityGroupsIdSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    filterSet: {
      type: "TypeFilterSetType",
      wsdlDefinition: {
        name: "filterSet",
        type: "tns:FilterSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeSecurityGroupsType;
Modeler.register(TypeDescribeSecurityGroupsType, "TypeDescribeSecurityGroupsType");
