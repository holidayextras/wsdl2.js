var Modeler = require("../Modeler.js");
var className = 'TypeDescribeKeyPairsResponseItemType';

var TypeDescribeKeyPairsResponseItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  keyName: {
      type: "string",
      wsdlDefinition: {
        name: "keyName",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    keyFingerprint: {
      type: "string",
      wsdlDefinition: {
        name: "keyFingerprint",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeKeyPairsResponseItemType;
Modeler.register(TypeDescribeKeyPairsResponseItemType, "TypeDescribeKeyPairsResponseItemType");
