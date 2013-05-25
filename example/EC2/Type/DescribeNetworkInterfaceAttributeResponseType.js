var Modeler = require("../Modeler.js");
var className = 'TypeDescribeNetworkInterfaceAttributeResponseType';

var TypeDescribeNetworkInterfaceAttributeResponseType = function(json, parentObj) {
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
      type: "TypeGroupSetType",
      wsdlDefinition: {
        name: "groupSet",
        type: "tns:GroupSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    attachment: {
      type: "TypeNetworkInterfaceAttachmentType",
      wsdlDefinition: {
        name: "attachment",
        type: "tns:NetworkInterfaceAttachmentType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeNetworkInterfaceAttributeResponseType;
Modeler.register(TypeDescribeNetworkInterfaceAttributeResponseType, "TypeDescribeNetworkInterfaceAttributeResponseType");
