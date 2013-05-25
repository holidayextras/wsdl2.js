var Modeler = require("../Modeler.js");
var className = 'ElementDescribeSubnets';

var ElementDescribeSubnets = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeSubnets: {
      type: "TypeDescribeSubnetsType",
      wsdlDefinition: {
        name: "DescribeSubnets",
        type: "tns:DescribeSubnetsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeSubnets;
Modeler.register(ElementDescribeSubnets, "ElementDescribeSubnets");
