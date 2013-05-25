var Modeler = require("../Modeler.js");
var className = 'ElementDescribeNetworkInterfaceAttribute';

var ElementDescribeNetworkInterfaceAttribute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeNetworkInterfaceAttribute: {
      type: "TypeDescribeNetworkInterfaceAttributeType",
      wsdlDefinition: {
        name: "DescribeNetworkInterfaceAttribute",
        type: "tns:DescribeNetworkInterfaceAttributeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeNetworkInterfaceAttribute;
Modeler.register(ElementDescribeNetworkInterfaceAttribute, "ElementDescribeNetworkInterfaceAttribute");
