var Modeler = require("../Modeler.js");
var className = 'TypeDhcpOptionsSetType';

var TypeDhcpOptionsSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDhcpOptionsType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DhcpOptionsType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDhcpOptionsSetType;
Modeler.register(TypeDhcpOptionsSetType, "TypeDhcpOptionsSetType");
