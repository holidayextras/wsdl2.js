var Modeler = require("../Modeler.js");
var className = 'TypeDescribeKeyPairsItemType';

var TypeDescribeKeyPairsItemType = function(json, parentObj) {
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
    }
	}, parentObj, json);
};

module.exports = TypeDescribeKeyPairsItemType;
Modeler.register(TypeDescribeKeyPairsItemType, "TypeDescribeKeyPairsItemType");
