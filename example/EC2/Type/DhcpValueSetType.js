var Modeler = require("../Modeler.js");
var className = 'TypeDhcpValueSetType';

var TypeDhcpValueSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDhcpValueType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DhcpValueType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDhcpValueSetType;
Modeler.register(TypeDhcpValueSetType, "TypeDhcpValueSetType");
