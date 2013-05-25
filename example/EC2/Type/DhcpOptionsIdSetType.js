var Modeler = require("../Modeler.js");
var className = 'TypeDhcpOptionsIdSetType';

var TypeDhcpOptionsIdSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDhcpOptionsIdSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DhcpOptionsIdSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDhcpOptionsIdSetType;
Modeler.register(TypeDhcpOptionsIdSetType, "TypeDhcpOptionsIdSetType");
