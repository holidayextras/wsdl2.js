var Modeler = require("../Modeler.js");
var className = 'ElementDeleteDhcpOptionsResponse';

var ElementDeleteDhcpOptionsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteDhcpOptionsResponse: {
      type: "TypeDeleteDhcpOptionsResponseType",
      wsdlDefinition: {
        name: "DeleteDhcpOptionsResponse",
        type: "tns:DeleteDhcpOptionsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteDhcpOptionsResponse;
Modeler.register(ElementDeleteDhcpOptionsResponse, "ElementDeleteDhcpOptionsResponse");
