var Modeler = require("../Modeler.js");
var className = 'TypeDiskImageSetType';

var TypeDiskImageSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDiskImageType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DiskImageType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDiskImageSetType;
Modeler.register(TypeDiskImageSetType, "TypeDiskImageSetType");
