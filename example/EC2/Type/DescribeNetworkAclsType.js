var Modeler = require("../Modeler.js");
var className = 'TypeDescribeNetworkAclsType';

var TypeDescribeNetworkAclsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  networkAclIdSet: {
      type: "TypeNetworkAclIdSetType",
      wsdlDefinition: {
        name: "networkAclIdSet",
        type: "tns:NetworkAclIdSetType"
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

module.exports = TypeDescribeNetworkAclsType;
Modeler.register(TypeDescribeNetworkAclsType, "TypeDescribeNetworkAclsType");
