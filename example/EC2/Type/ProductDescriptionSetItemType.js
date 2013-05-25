var Modeler = require("../Modeler.js");
var className = 'TypeProductDescriptionSetItemType';

var TypeProductDescriptionSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  productDescription: {
      type: "string",
      wsdlDefinition: {
        name: "productDescription",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeProductDescriptionSetItemType;
Modeler.register(TypeProductDescriptionSetItemType, "TypeProductDescriptionSetItemType");
