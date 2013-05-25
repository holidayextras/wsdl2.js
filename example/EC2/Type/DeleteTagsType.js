var Modeler = require("../Modeler.js");
var className = 'TypeDeleteTagsType';

var TypeDeleteTagsType = function(json, parentObj) {
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
      type: "TypeDeleteTagsSetType",
      wsdlDefinition: {
        name: "tagSet",
        type: "tns:DeleteTagsSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDeleteTagsType;
Modeler.register(TypeDeleteTagsType, "TypeDeleteTagsType");
