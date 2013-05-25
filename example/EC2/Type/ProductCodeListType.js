var Modeler = require("../Modeler.js");
var className = 'TypeProductCodeListType';

var TypeProductCodeListType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeProductCodeItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:ProductCodeItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeProductCodeListType;
Modeler.register(TypeProductCodeListType, "TypeProductCodeListType");
