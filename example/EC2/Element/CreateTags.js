var Modeler = require("../Modeler.js");
var className = 'ElementCreateTags';

var ElementCreateTags = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateTags: {
      type: "TypeCreateTagsType",
      wsdlDefinition: {
        name: "CreateTags",
        type: "tns:CreateTagsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateTags;
Modeler.register(ElementCreateTags, "ElementCreateTags");
