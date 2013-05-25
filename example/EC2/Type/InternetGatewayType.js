var Modeler = require("../Modeler.js");
var className = 'TypeInternetGatewayType';

var TypeInternetGatewayType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  internetGatewayId: {
      type: "string",
      wsdlDefinition: {
        name: "internetGatewayId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    attachmentSet: {
      type: "TypeInternetGatewayAttachmentSetType",
      wsdlDefinition: {
        name: "attachmentSet",
        type: "tns:InternetGatewayAttachmentSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    tagSet: {
      type: "TypeResourceTagSetType",
      wsdlDefinition: {
        name: "tagSet",
        type: "tns:ResourceTagSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInternetGatewayType;
Modeler.register(TypeInternetGatewayType, "TypeInternetGatewayType");
