var Modeler = require("../Modeler.js");
var className = 'TypeModifyImageAttributeType';

var TypeModifyImageAttributeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  launchPermission: {
      type: "TypeLaunchPermissionOperationType",
      wsdlDefinition: {
        name: "launchPermission",
        type: "tns:LaunchPermissionOperationType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    productCodes: {
      type: "TypeProductCodeListType",
      wsdlDefinition: {
        name: "productCodes",
        type: "tns:ProductCodeListType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    description: {
      type: "TypeAttributeValueType",
      wsdlDefinition: {
        name: "description",
        type: "tns:AttributeValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeModifyImageAttributeType;
Modeler.register(TypeModifyImageAttributeType, "TypeModifyImageAttributeType");
