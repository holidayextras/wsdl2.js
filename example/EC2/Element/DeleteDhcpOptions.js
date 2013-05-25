var Modeler = require("../Modeler.js");
var className = 'ElementDeleteDhcpOptions';

var ElementDeleteDhcpOptions = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteDhcpOptions: {
      type: "TypeDeleteDhcpOptionsType",
      wsdlDefinition: {
        name: "DeleteDhcpOptions",
        type: "tns:DeleteDhcpOptionsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteDhcpOptions;
Modeler.register(ElementDeleteDhcpOptions, "ElementDeleteDhcpOptions");
