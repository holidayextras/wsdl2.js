var Modeler = require("../Modeler.js");
var className = 'TypeModifyInstanceAttributeType';

var TypeModifyInstanceAttributeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  instanceType: {
      type: "TypeAttributeValueType",
      wsdlDefinition: {
        name: "instanceType",
        type: "tns:AttributeValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    kernel: {
      type: "TypeAttributeValueType",
      wsdlDefinition: {
        name: "kernel",
        type: "tns:AttributeValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ramdisk: {
      type: "TypeAttributeValueType",
      wsdlDefinition: {
        name: "ramdisk",
        type: "tns:AttributeValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    userData: {
      type: "TypeAttributeValueType",
      wsdlDefinition: {
        name: "userData",
        type: "tns:AttributeValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    disableApiTermination: {
      type: "TypeAttributeBooleanValueType",
      wsdlDefinition: {
        name: "disableApiTermination",
        type: "tns:AttributeBooleanValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceInitiatedShutdownBehavior: {
      type: "TypeAttributeValueType",
      wsdlDefinition: {
        name: "instanceInitiatedShutdownBehavior",
        type: "tns:AttributeValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    blockDeviceMapping: {
      type: "TypeInstanceBlockDeviceMappingType",
      wsdlDefinition: {
        name: "blockDeviceMapping",
        type: "tns:InstanceBlockDeviceMappingType"
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
    ebsOptimized: {
      type: "TypeAttributeBooleanValueType",
      wsdlDefinition: {
        name: "ebsOptimized",
        type: "tns:AttributeBooleanValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeModifyInstanceAttributeType;
Modeler.register(TypeModifyInstanceAttributeType, "TypeModifyInstanceAttributeType");
