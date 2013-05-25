var Modeler = require("../Modeler.js");
var className = 'TypeCreateVolumePermissionListType';

var TypeCreateVolumePermissionListType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeCreateVolumePermissionItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:CreateVolumePermissionItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateVolumePermissionListType;
Modeler.register(TypeCreateVolumePermissionListType, "TypeCreateVolumePermissionListType");
