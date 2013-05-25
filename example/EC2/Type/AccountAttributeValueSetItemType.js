var Modeler = require("../Modeler.js");
var className = 'TypeAccountAttributeValueSetItemType';

var TypeAccountAttributeValueSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  attributeValue: {
      type: "string",
      wsdlDefinition: {
        name: "attributeValue",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAccountAttributeValueSetItemType;
Modeler.register(TypeAccountAttributeValueSetItemType, "TypeAccountAttributeValueSetItemType");
