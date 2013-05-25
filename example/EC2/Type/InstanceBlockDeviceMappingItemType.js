var Modeler = require("../Modeler.js");
var className = 'TypeInstanceBlockDeviceMappingItemType';

var TypeInstanceBlockDeviceMappingItemType = function(json, parentObj) {
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
      type: "TypeInstanceEbsBlockDeviceType",
      wsdlDefinition: {
        name: "ebs",
        type: "tns:InstanceEbsBlockDeviceType"
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

module.exports = TypeInstanceBlockDeviceMappingItemType;
Modeler.register(TypeInstanceBlockDeviceMappingItemType, "TypeInstanceBlockDeviceMappingItemType");
