var Modeler = require("../Modeler.js");
var className = 'ElementDescribeNetworkInterfaceAttributeResponse';

var ElementDescribeNetworkInterfaceAttributeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeNetworkInterfaceAttributeResponse: {
      type: "TypeDescribeNetworkInterfaceAttributeResponseType",
      wsdlDefinition: {
        name: "DescribeNetworkInterfaceAttributeResponse",
        type: "tns:DescribeNetworkInterfaceAttributeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeNetworkInterfaceAttributeResponse;
Modeler.register(ElementDescribeNetworkInterfaceAttributeResponse, "ElementDescribeNetworkInterfaceAttributeResponse");
