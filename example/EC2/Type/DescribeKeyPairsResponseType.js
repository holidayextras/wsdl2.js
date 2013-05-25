var Modeler = require("../Modeler.js");
var className = 'TypeDescribeKeyPairsResponseType';

var TypeDescribeKeyPairsResponseType = function(json, parentObj) {
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
    keySet: {
      type: "TypeDescribeKeyPairsResponseInfoType",
      wsdlDefinition: {
        name: "keySet",
        type: "tns:DescribeKeyPairsResponseInfoType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeKeyPairsResponseType;
Modeler.register(TypeDescribeKeyPairsResponseType, "TypeDescribeKeyPairsResponseType");
