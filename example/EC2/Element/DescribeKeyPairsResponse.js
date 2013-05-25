var Modeler = require("../Modeler.js");
var className = 'ElementDescribeKeyPairsResponse';

var ElementDescribeKeyPairsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeKeyPairsResponse: {
      type: "TypeDescribeKeyPairsResponseType",
      wsdlDefinition: {
        name: "DescribeKeyPairsResponse",
        type: "tns:DescribeKeyPairsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeKeyPairsResponse;
Modeler.register(ElementDescribeKeyPairsResponse, "ElementDescribeKeyPairsResponse");
