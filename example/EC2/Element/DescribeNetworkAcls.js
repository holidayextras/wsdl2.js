var Modeler = require("../Modeler.js");
var className = 'ElementDescribeNetworkAcls';

var ElementDescribeNetworkAcls = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeNetworkAcls: {
      type: "TypeDescribeNetworkAclsType",
      wsdlDefinition: {
        name: "DescribeNetworkAcls",
        type: "tns:DescribeNetworkAclsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeNetworkAcls;
Modeler.register(ElementDescribeNetworkAcls, "ElementDescribeNetworkAcls");
