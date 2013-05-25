var Modeler = require("../Modeler.js");
var className = 'TypeDhcpConfigurationItemType';

var TypeDhcpConfigurationItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  key: {
      type: "string",
      wsdlDefinition: {
        name: "key",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    valueSet: {
      type: "TypeDhcpValueSetType",
      wsdlDefinition: {
        name: "valueSet",
        type: "tns:DhcpValueSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDhcpConfigurationItemType;
Modeler.register(TypeDhcpConfigurationItemType, "TypeDhcpConfigurationItemType");
