var Modeler = require("../Modeler.js");
var className = 'TypeDescribeVpcsResponseType';

var TypeDescribeVpcsResponseType = function(json, parentObj) {
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
    vpcSet: {
      type: "TypeVpcSetType",
      wsdlDefinition: {
        name: "vpcSet",
        type: "tns:VpcSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeVpcsResponseType;
Modeler.register(TypeDescribeVpcsResponseType, "TypeDescribeVpcsResponseType");
