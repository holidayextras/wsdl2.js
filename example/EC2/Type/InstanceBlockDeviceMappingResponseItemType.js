var Modeler = require("../Modeler.js");
var className = 'TypeInstanceBlockDeviceMappingResponseItemType';

var TypeInstanceBlockDeviceMappingResponseItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ebs: {
      type: "TypeEbsInstanceBlockDeviceMappingResponseType",
      wsdlDefinition: {
        name: "ebs",
        type: "tns:EbsInstanceBlockDeviceMappingResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceBlockDeviceMappingResponseItemType;
Modeler.register(TypeInstanceBlockDeviceMappingResponseItemType, "TypeInstanceBlockDeviceMappingResponseItemType");
