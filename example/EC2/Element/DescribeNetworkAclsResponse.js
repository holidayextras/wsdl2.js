var Modeler = require("../Modeler.js");
var className = 'ElementDescribeNetworkAclsResponse';

var ElementDescribeNetworkAclsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeNetworkAclsResponse: {
      type: "TypeDescribeNetworkAclsResponseType",
      wsdlDefinition: {
        name: "DescribeNetworkAclsResponse",
        type: "tns:DescribeNetworkAclsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeNetworkAclsResponse;
Modeler.register(ElementDescribeNetworkAclsResponse, "ElementDescribeNetworkAclsResponse");
