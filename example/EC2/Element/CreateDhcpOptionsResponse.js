var Modeler = require("../Modeler.js");
var className = 'ElementCreateDhcpOptionsResponse';

var ElementCreateDhcpOptionsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateDhcpOptionsResponse: {
      type: "TypeCreateDhcpOptionsResponseType",
      wsdlDefinition: {
        name: "CreateDhcpOptionsResponse",
        type: "tns:CreateDhcpOptionsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateDhcpOptionsResponse;
Modeler.register(ElementCreateDhcpOptionsResponse, "ElementCreateDhcpOptionsResponse");
