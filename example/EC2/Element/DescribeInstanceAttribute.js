var Modeler = require("../Modeler.js");
var className = 'ElementDescribeInstanceAttribute';

var ElementDescribeInstanceAttribute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeInstanceAttribute: {
      type: "TypeDescribeInstanceAttributeType",
      wsdlDefinition: {
        name: "DescribeInstanceAttribute",
        type: "tns:DescribeInstanceAttributeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeInstanceAttribute;
Modeler.register(ElementDescribeInstanceAttribute, "ElementDescribeInstanceAttribute");
