var Modeler = require("../Modeler.js");
var className = 'TypeAccountAttributeNameSetItemType';

var TypeAccountAttributeNameSetItemType = function(json, parentObj) {
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
    }
	}, parentObj, json);
};

module.exports = TypeAccountAttributeNameSetItemType;
Modeler.register(TypeAccountAttributeNameSetItemType, "TypeAccountAttributeNameSetItemType");
