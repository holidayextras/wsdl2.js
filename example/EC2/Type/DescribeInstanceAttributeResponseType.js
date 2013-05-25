var Modeler = require("../Modeler.js");
var className = 'TypeDescribeInstanceAttributeResponseType';

var TypeDescribeInstanceAttributeResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  instanceType: {
      type: "TypeNullableAttributeValueType",
      wsdlDefinition: {
        name: "instanceType",
        type: "tns:NullableAttributeValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    kernel: {
      type: "TypeNullableAttributeValueType",
      wsdlDefinition: {
        name: "kernel",
        type: "tns:NullableAttributeValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ramdisk: {
      type: "TypeNullableAttributeValueType",
      wsdlDefinition: {
        name: "ramdisk",
        type: "tns:NullableAttributeValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    userData: {
      type: "TypeNullableAttributeValueType",
      wsdlDefinition: {
        name: "userData",
        type: "tns:NullableAttributeValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    disableApiTermination: {
      type: "TypeNullableAttributeBooleanValueType",
      wsdlDefinition: {
        name: "disableApiTermination",
        type: "tns:NullableAttributeBooleanValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceInitiatedShutdownBehavior: {
      type: "TypeNullableAttributeValueType",
      wsdlDefinition: {
        name: "instanceInitiatedShutdownBehavior",
        type: "tns:NullableAttributeValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    rootDeviceName: {
      type: "TypeNullableAttributeValueType",
      wsdlDefinition: {
        name: "rootDeviceName",
        type: "tns:NullableAttributeValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    blockDeviceMapping: {
      type: "TypeInstanceBlockDeviceMappingResponseType",
      wsdlDefinition: {
        name: "blockDeviceMapping",
        type: "tns:InstanceBlockDeviceMappingResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    sourceDestCheck: {
      type: "TypeNullableAttributeBooleanValueType",
      wsdlDefinition: {
        name: "sourceDestCheck",
        type: "tns:NullableAttributeBooleanValueType"
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
    productCodes: {
      type: "TypeProductCodesSetType",
      wsdlDefinition: {
        name: "productCodes",
        type: "tns:ProductCodesSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ebsOptimized: {
      type: "TypeNullableAttributeBooleanValueType",
      wsdlDefinition: {
        name: "ebsOptimized",
        type: "tns:NullableAttributeBooleanValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeInstanceAttributeResponseType;
Modeler.register(TypeDescribeInstanceAttributeResponseType, "TypeDescribeInstanceAttributeResponseType");
