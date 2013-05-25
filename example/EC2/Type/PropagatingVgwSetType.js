var Modeler = require("../Modeler.js");
var className = 'TypePropagatingVgwSetType';

var TypePropagatingVgwSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypePropagatingVgwType",
      wsdlDefinition: {
        name: "item",
        type: "tns:PropagatingVgwType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePropagatingVgwSetType;
Modeler.register(TypePropagatingVgwSetType, "TypePropagatingVgwSetType");
