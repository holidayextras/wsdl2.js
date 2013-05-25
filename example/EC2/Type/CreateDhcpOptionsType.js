var Modeler = require("../Modeler.js");
var className = 'TypeCreateDhcpOptionsType';

var TypeCreateDhcpOptionsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  dhcpConfigurationSet: {
      type: "TypeDhcpConfigurationItemSetType",
      wsdlDefinition: {
        name: "dhcpConfigurationSet",
        type: "tns:DhcpConfigurationItemSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateDhcpOptionsType;
Modeler.register(TypeCreateDhcpOptionsType, "TypeCreateDhcpOptionsType");
