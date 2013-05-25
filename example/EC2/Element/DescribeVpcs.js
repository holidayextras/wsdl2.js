var Modeler = require("../Modeler.js");
var className = 'ElementDescribeVpcs';

var ElementDescribeVpcs = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeVpcs: {
      type: "TypeDescribeVpcsType",
      wsdlDefinition: {
        name: "DescribeVpcs",
        type: "tns:DescribeVpcsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeVpcs;
Modeler.register(ElementDescribeVpcs, "ElementDescribeVpcs");
