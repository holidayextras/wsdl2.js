var Modeler = require("../Modeler.js");
var className = 'TypeDescribeInstanceStatusResponseType';

var TypeDescribeInstanceStatusResponseType = function(json, parentObj) {
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
    instanceStatusSet: {
      type: "TypeInstanceStatusSetType",
      wsdlDefinition: {
        name: "instanceStatusSet",
        type: "tns:InstanceStatusSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    nextToken: {
      type: "string",
      wsdlDefinition: {
        name: "nextToken",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeInstanceStatusResponseType;
Modeler.register(TypeDescribeInstanceStatusResponseType, "TypeDescribeInstanceStatusResponseType");
