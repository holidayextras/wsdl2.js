var Modeler = require("../Modeler.js");
var className = 'TypeAttachmentSetItemResponseType';

var TypeAttachmentSetItemResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  volumeId: {
      type: "string",
      wsdlDefinition: {
        name: "volumeId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceId: {
      type: "string",
      wsdlDefinition: {
        name: "instanceId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    device: {
      type: "string",
      wsdlDefinition: {
        name: "device",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    status: {
      type: "string",
      wsdlDefinition: {
        name: "status",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    attachTime: {
      type: "date",
      wsdlDefinition: {
        name: "attachTime",
        type: "xs:dateTime"
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

module.exports = TypeAttachmentSetItemResponseType;
Modeler.register(TypeAttachmentSetItemResponseType, "TypeAttachmentSetItemResponseType");
