var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSubnetsResponseType';

var TypeDescribeSubnetsResponseType = function(json, parentObj) {
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
    subnetSet: {
      type: "TypeSubnetSetType",
      wsdlDefinition: {
        name: "subnetSet",
        type: "tns:SubnetSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeSubnetsResponseType;
Modeler.register(TypeDescribeSubnetsResponseType, "TypeDescribeSubnetsResponseType");
