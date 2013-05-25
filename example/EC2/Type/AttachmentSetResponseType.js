var Modeler = require("../Modeler.js");
var className = 'TypeAttachmentSetResponseType';

var TypeAttachmentSetResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeAttachmentSetItemResponseType",
      wsdlDefinition: {
        name: "item",
        type: "tns:AttachmentSetItemResponseType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAttachmentSetResponseType;
Modeler.register(TypeAttachmentSetResponseType, "TypeAttachmentSetResponseType");
