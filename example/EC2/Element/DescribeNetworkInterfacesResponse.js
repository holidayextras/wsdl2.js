var Modeler = require("../Modeler.js");
var className = 'ElementDescribeNetworkInterfacesResponse';

var ElementDescribeNetworkInterfacesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeNetworkInterfacesResponse: {
      type: "TypeDescribeNetworkInterfacesResponseType",
      wsdlDefinition: {
        name: "DescribeNetworkInterfacesResponse",
        type: "tns:DescribeNetworkInterfacesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeNetworkInterfacesResponse;
Modeler.register(ElementDescribeNetworkInterfacesResponse, "ElementDescribeNetworkInterfacesResponse");
