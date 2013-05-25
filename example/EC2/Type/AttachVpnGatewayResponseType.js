var Modeler = require("../Modeler.js");
var className = 'TypeAttachVpnGatewayResponseType';

var TypeAttachVpnGatewayResponseType = function(json, parentObj) {
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
    attachment: {
      type: "TypeAttachmentType",
      wsdlDefinition: {
        name: "attachment",
        type: "tns:AttachmentType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAttachVpnGatewayResponseType;
Modeler.register(TypeAttachVpnGatewayResponseType, "TypeAttachVpnGatewayResponseType");
