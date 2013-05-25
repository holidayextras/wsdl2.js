var Modeler = require("../Modeler.js");
var className = 'TypeInternetGatewayAttachmentType';

var TypeInternetGatewayAttachmentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  vpcId: {
      type: "string",
      wsdlDefinition: {
        name: "vpcId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    state: {
      type: "string",
      wsdlDefinition: {
        name: "state",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInternetGatewayAttachmentType;
Modeler.register(TypeInternetGatewayAttachmentType, "TypeInternetGatewayAttachmentType");
