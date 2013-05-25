var Modeler = require("../Modeler.js");
var className = 'ElementDescribeImageAttribute';

var ElementDescribeImageAttribute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeImageAttribute: {
      type: "TypeDescribeImageAttributeType",
      wsdlDefinition: {
        name: "DescribeImageAttribute",
        type: "tns:DescribeImageAttributeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeImageAttribute;
Modeler.register(ElementDescribeImageAttribute, "ElementDescribeImageAttribute");
