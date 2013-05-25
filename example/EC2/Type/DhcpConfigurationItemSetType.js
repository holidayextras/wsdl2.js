var Modeler = require("../Modeler.js");
var className = 'TypeDhcpConfigurationItemSetType';

var TypeDhcpConfigurationItemSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDhcpConfigurationItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DhcpConfigurationItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDhcpConfigurationItemSetType;
Modeler.register(TypeDhcpConfigurationItemSetType, "TypeDhcpConfigurationItemSetType");
