var Modeler = require("../Modeler.js");
var className = 'TypeConversionTaskSetType';

var TypeConversionTaskSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeConversionTaskType",
      wsdlDefinition: {
        name: "item",
        type: "tns:ConversionTaskType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeConversionTaskSetType;
Modeler.register(TypeConversionTaskSetType, "TypeConversionTaskSetType");
