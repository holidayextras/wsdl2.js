var Modeler = require("../Modeler.js");
var className = 'TypeInternetGatewayAttachmentSetType';

var TypeInternetGatewayAttachmentSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeInternetGatewayAttachmentType",
      wsdlDefinition: {
        name: "item",
        type: "tns:InternetGatewayAttachmentType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInternetGatewayAttachmentSetType;
Modeler.register(TypeInternetGatewayAttachmentSetType, "TypeInternetGatewayAttachmentSetType");
