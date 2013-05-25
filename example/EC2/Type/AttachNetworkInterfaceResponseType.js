var Modeler = require("../Modeler.js");
var className = 'TypeAttachNetworkInterfaceResponseType';

var TypeAttachNetworkInterfaceResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    attachmentId: {
      type: "string",
      wsdlDefinition: {
        name: "attachmentId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAttachNetworkInterfaceResponseType;
Modeler.register(TypeAttachNetworkInterfaceResponseType, "TypeAttachNetworkInterfaceResponseType");
