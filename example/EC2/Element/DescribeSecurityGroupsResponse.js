var Modeler = require("../Modeler.js");
var className = 'ElementDescribeSecurityGroupsResponse';

var ElementDescribeSecurityGroupsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeSecurityGroupsResponse: {
      type: "TypeDescribeSecurityGroupsResponseType",
      wsdlDefinition: {
        name: "DescribeSecurityGroupsResponse",
        type: "tns:DescribeSecurityGroupsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeSecurityGroupsResponse;
Modeler.register(ElementDescribeSecurityGroupsResponse, "ElementDescribeSecurityGroupsResponse");
