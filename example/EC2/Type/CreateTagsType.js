var Modeler = require("../Modeler.js");
var className = 'TypeCreateTagsType';

var TypeCreateTagsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  resourcesSet: {
      type: "TypeResourceIdSetType",
      wsdlDefinition: {
        name: "resourcesSet",
        type: "tns:ResourceIdSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    tagSet: {
      type: "TypeResourceTagSetType",
      wsdlDefinition: {
        name: "tagSet",
        type: "tns:ResourceTagSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateTagsType;
Modeler.register(TypeCreateTagsType, "TypeCreateTagsType");
