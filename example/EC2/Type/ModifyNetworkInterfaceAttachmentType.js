var Modeler = require("../Modeler.js");
var className = 'TypeModifyNetworkInterfaceAttachmentType';

var TypeModifyNetworkInterfaceAttachmentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  attachmentId: {
      type: "string",
      wsdlDefinition: {
        name: "attachmentId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    deleteOnTermination: {
      type: "boolean",
      wsdlDefinition: {
        name: "deleteOnTermination",
        type: "xs:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeModifyNetworkInterfaceAttachmentType;
Modeler.register(TypeModifyNetworkInterfaceAttachmentType, "TypeModifyNetworkInterfaceAttachmentType");
