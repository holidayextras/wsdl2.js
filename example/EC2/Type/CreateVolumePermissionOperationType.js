var Modeler = require("../Modeler.js");
var className = 'TypeCreateVolumePermissionOperationType';

var TypeCreateVolumePermissionOperationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  add: {
      type: "TypeCreateVolumePermissionListType",
      wsdlDefinition: {
        name: "add",
        type: "tns:CreateVolumePermissionListType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    remove: {
      type: "TypeCreateVolumePermissionListType",
      wsdlDefinition: {
        name: "remove",
        type: "tns:CreateVolumePermissionListType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateVolumePermissionOperationType;
Modeler.register(TypeCreateVolumePermissionOperationType, "TypeCreateVolumePermissionOperationType");
