var Modeler = require("../Modeler.js");
var className = 'TypeBlockDeviceMappingItemType';

var TypeBlockDeviceMappingItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  virtualName: {
      type: "string",
      wsdlDefinition: {
        name: "virtualName",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ebs: {
      type: "TypeEbsBlockDeviceType",
      wsdlDefinition: {
        name: "ebs",
        type: "tns:EbsBlockDeviceType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    noDevice: {
      type: "TypeEmptyElementType",
      wsdlDefinition: {
        name: "noDevice",
        type: "tns:EmptyElementType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBlockDeviceMappingItemType;
Modeler.register(TypeBlockDeviceMappingItemType, "TypeBlockDeviceMappingItemType");
