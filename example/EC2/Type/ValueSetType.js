var Modeler = require("../Modeler.js");
var className = 'TypeValueSetType';

var TypeValueSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeValueType",
      wsdlDefinition: {
        name: "item",
        type: "tns:ValueType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeValueSetType;
Modeler.register(TypeValueSetType, "TypeValueSetType");
