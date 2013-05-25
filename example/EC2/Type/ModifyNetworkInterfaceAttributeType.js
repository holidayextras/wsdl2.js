var Modeler = require("../Modeler.js");
var className = 'TypeModifyNetworkInterfaceAttributeType';

var TypeModifyNetworkInterfaceAttributeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  description: {
      type: "TypeNullableAttributeValueType",
      wsdlDefinition: {
        name: "description",
        type: "tns:NullableAttributeValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    sourceDestCheck: {
      type: "TypeAttributeBooleanValueType",
      wsdlDefinition: {
        name: "sourceDestCheck",
        type: "tns:AttributeBooleanValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    groupSet: {
      type: "TypeSecurityGroupIdSetType",
      wsdlDefinition: {
        name: "groupSet",
        type: "tns:SecurityGroupIdSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    attachment: {
      type: "TypeModifyNetworkInterfaceAttachmentType",
      wsdlDefinition: {
        name: "attachment",
        type: "tns:ModifyNetworkInterfaceAttachmentType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeModifyNetworkInterfaceAttributeType;
Modeler.register(TypeModifyNetworkInterfaceAttributeType, "TypeModifyNetworkInterfaceAttributeType");
