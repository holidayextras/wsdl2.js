var Modeler = require("../Modeler.js");
var className = 'ElementDescribeNetworkInterfaces';

var ElementDescribeNetworkInterfaces = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeNetworkInterfaces: {
      type: "TypeDescribeNetworkInterfacesType",
      wsdlDefinition: {
        name: "DescribeNetworkInterfaces",
        type: "tns:DescribeNetworkInterfacesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeNetworkInterfaces;
Modeler.register(ElementDescribeNetworkInterfaces, "ElementDescribeNetworkInterfaces");
