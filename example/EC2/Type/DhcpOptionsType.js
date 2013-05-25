var Modeler = require("../Modeler.js");
var className = 'TypeDhcpOptionsType';

var TypeDhcpOptionsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  dhcpOptionsId: {
      type: "string",
      wsdlDefinition: {
        name: "dhcpOptionsId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    dhcpConfigurationSet: {
      type: "TypeDhcpConfigurationItemSetType",
      wsdlDefinition: {
        name: "dhcpConfigurationSet",
        type: "tns:DhcpConfigurationItemSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    tagSet: {
      type: "TypeResourceTagSetType",
      wsdlDefinition: {
        name: "tagSet",
        type: "tns:ResourceTagSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDhcpOptionsType;
Modeler.register(TypeDhcpOptionsType, "TypeDhcpOptionsType");
