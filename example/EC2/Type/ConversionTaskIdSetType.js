var Modeler = require("../Modeler.js");
var className = 'TypeConversionTaskIdSetType';

var TypeConversionTaskIdSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeConversionTaskIdItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:ConversionTaskIdItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeConversionTaskIdSetType;
Modeler.register(TypeConversionTaskIdSetType, "TypeConversionTaskIdSetType");
