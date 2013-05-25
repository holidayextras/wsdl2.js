var Modeler = require("../Modeler.js");
var className = 'TypeAttachmentSetType';

var TypeAttachmentSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeAttachmentType",
      wsdlDefinition: {
        name: "item",
        type: "tns:AttachmentType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAttachmentSetType;
Modeler.register(TypeAttachmentSetType, "TypeAttachmentSetType");
