var Modeler = require("../Modeler.js");
var className = 'ElementDescribeAccountAttributes';

var ElementDescribeAccountAttributes = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeAccountAttributes: {
      type: "TypeDescribeAccountAttributesType",
      wsdlDefinition: {
        name: "DescribeAccountAttributes",
        type: "tns:DescribeAccountAttributesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeAccountAttributes;
Modeler.register(ElementDescribeAccountAttributes, "ElementDescribeAccountAttributes");
