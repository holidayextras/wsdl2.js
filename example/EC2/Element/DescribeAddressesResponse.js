var Modeler = require("../Modeler.js");
var className = 'ElementDescribeAddressesResponse';

var ElementDescribeAddressesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeAddressesResponse: {
      type: "TypeDescribeAddressesResponseType",
      wsdlDefinition: {
        name: "DescribeAddressesResponse",
        type: "tns:DescribeAddressesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeAddressesResponse;
Modeler.register(ElementDescribeAddressesResponse, "ElementDescribeAddressesResponse");
