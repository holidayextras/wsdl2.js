var Modeler = require("../Modeler.js");
var className = 'TypeDescribeImageAttributeResponseType';

var TypeDescribeImageAttributeResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  launchPermission: {
      type: "TypeLaunchPermissionListType",
      wsdlDefinition: {
        name: "launchPermission",
        type: "tns:LaunchPermissionListType"
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
    description: {
      type: "TypeNullableAttributeValueType",
      wsdlDefinition: {
        name: "description",
        type: "tns:NullableAttributeValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    blockDeviceMapping: {
      type: "TypeBlockDeviceMappingType",
      wsdlDefinition: {
        name: "blockDeviceMapping",
        type: "tns:BlockDeviceMappingType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeImageAttributeResponseType;
Modeler.register(TypeDescribeImageAttributeResponseType, "TypeDescribeImageAttributeResponseType");
