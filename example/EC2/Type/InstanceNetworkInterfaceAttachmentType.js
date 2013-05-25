var Modeler = require("../Modeler.js");
var className = 'TypeInstanceNetworkInterfaceAttachmentType';

var TypeInstanceNetworkInterfaceAttachmentType = function(json, parentObj) {
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
    deviceIndex: {
      type: "number",
      wsdlDefinition: {
        name: "deviceIndex",
        type: "xs:int"
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

module.exports = TypeInstanceNetworkInterfaceAttachmentType;
Modeler.register(TypeInstanceNetworkInterfaceAttachmentType, "TypeInstanceNetworkInterfaceAttachmentType");
