var Modeler = require("../Modeler.js");
var className = 'TypeAccountAttributeSetItemType';

var TypeAccountAttributeSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  attributeName: {
      type: "string",
      wsdlDefinition: {
        name: "attributeName",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    attributeValueSet: {
      type: "TypeAccountAttributeValueSetType",
      wsdlDefinition: {
        name: "attributeValueSet",
        type: "tns:AccountAttributeValueSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAccountAttributeSetItemType;
Modeler.register(TypeAccountAttributeSetItemType, "TypeAccountAttributeSetItemType");
