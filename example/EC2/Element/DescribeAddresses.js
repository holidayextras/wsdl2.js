var Modeler = require("../Modeler.js");
var className = 'ElementDescribeAddresses';

var ElementDescribeAddresses = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeAddresses: {
      type: "TypeDescribeAddressesType",
      wsdlDefinition: {
        name: "DescribeAddresses",
        type: "tns:DescribeAddressesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeAddresses;
Modeler.register(ElementDescribeAddresses, "ElementDescribeAddresses");
