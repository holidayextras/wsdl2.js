var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSecurityGroupsResponseType';

var TypeDescribeSecurityGroupsResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    securityGroupInfo: {
      type: "TypeSecurityGroupSetType",
      wsdlDefinition: {
        name: "securityGroupInfo",
        type: "tns:SecurityGroupSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeSecurityGroupsResponseType;
Modeler.register(TypeDescribeSecurityGroupsResponseType, "TypeDescribeSecurityGroupsResponseType");
