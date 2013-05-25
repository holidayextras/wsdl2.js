var Modeler = require("../Modeler.js");
var className = 'ElementDeleteTags';

var ElementDeleteTags = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteTags: {
      type: "TypeDeleteTagsType",
      wsdlDefinition: {
        name: "DeleteTags",
        type: "tns:DeleteTagsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteTags;
Modeler.register(ElementDeleteTags, "ElementDeleteTags");
