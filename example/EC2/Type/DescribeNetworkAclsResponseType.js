var Modeler = require("../Modeler.js");
var className = 'TypeDescribeNetworkAclsResponseType';

var TypeDescribeNetworkAclsResponseType = function(json, parentObj) {
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
    networkAclSet: {
      type: "TypeNetworkAclSetType",
      wsdlDefinition: {
        name: "networkAclSet",
        type: "tns:NetworkAclSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeNetworkAclsResponseType;
Modeler.register(TypeDescribeNetworkAclsResponseType, "TypeDescribeNetworkAclsResponseType");
