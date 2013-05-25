var Modeler = require("../Modeler.js");
var className = 'TypeDhcpOptionsIdSetItemType';

var TypeDhcpOptionsIdSetItemType = function(json, parentObj) {
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
    }
	}, parentObj, json);
};

module.exports = TypeDhcpOptionsIdSetItemType;
Modeler.register(TypeDhcpOptionsIdSetItemType, "TypeDhcpOptionsIdSetItemType");
