var Modeler = require("../Modeler.js");
var className = 'ElementDescribeDhcpOptionsResponse';

var ElementDescribeDhcpOptionsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeDhcpOptionsResponse: {
      type: "TypeDescribeDhcpOptionsResponseType",
      wsdlDefinition: {
        name: "DescribeDhcpOptionsResponse",
        type: "tns:DescribeDhcpOptionsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeDhcpOptionsResponse;
Modeler.register(ElementDescribeDhcpOptionsResponse, "ElementDescribeDhcpOptionsResponse");
