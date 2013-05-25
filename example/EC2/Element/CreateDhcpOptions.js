var Modeler = require("../Modeler.js");
var className = 'ElementCreateDhcpOptions';

var ElementCreateDhcpOptions = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateDhcpOptions: {
      type: "TypeCreateDhcpOptionsType",
      wsdlDefinition: {
        name: "CreateDhcpOptions",
        type: "tns:CreateDhcpOptionsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateDhcpOptions;
Modeler.register(ElementCreateDhcpOptions, "ElementCreateDhcpOptions");
