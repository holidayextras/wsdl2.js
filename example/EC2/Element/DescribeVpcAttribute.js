var Modeler = require("../Modeler.js");
var className = 'ElementDescribeVpcAttribute';

var ElementDescribeVpcAttribute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeVpcAttribute: {
      type: "TypeDescribeVpcAttributeType",
      wsdlDefinition: {
        name: "DescribeVpcAttribute",
        type: "tns:DescribeVpcAttributeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeVpcAttribute;
Modeler.register(ElementDescribeVpcAttribute, "ElementDescribeVpcAttribute");
