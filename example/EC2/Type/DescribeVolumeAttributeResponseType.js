var Modeler = require("../Modeler.js");
var className = 'TypeDescribeVolumeAttributeResponseType';

var TypeDescribeVolumeAttributeResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  autoEnableIO: {
      type: "TypeNullableAttributeBooleanValueType",
      wsdlDefinition: {
        name: "autoEnableIO",
        type: "tns:NullableAttributeBooleanValueType"
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
    }
	}, parentObj, json);
};

module.exports = TypeDescribeVolumeAttributeResponseType;
Modeler.register(TypeDescribeVolumeAttributeResponseType, "TypeDescribeVolumeAttributeResponseType");
