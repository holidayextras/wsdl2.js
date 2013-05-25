var Modeler = require("../Modeler.js");
var className = 'ElementDescribeKeyPairs';

var ElementDescribeKeyPairs = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeKeyPairs: {
      type: "TypeDescribeKeyPairsType",
      wsdlDefinition: {
        name: "DescribeKeyPairs",
        type: "tns:DescribeKeyPairsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeKeyPairs;
Modeler.register(ElementDescribeKeyPairs, "ElementDescribeKeyPairs");
