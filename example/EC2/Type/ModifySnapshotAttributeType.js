var Modeler = require("../Modeler.js");
var className = 'TypeModifySnapshotAttributeType';

var TypeModifySnapshotAttributeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  snapshotId: {
      type: "string",
      wsdlDefinition: {
        name: "snapshotId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    createVolumePermission: {
      type: "TypeCreateVolumePermissionOperationType",
      wsdlDefinition: {
        name: "createVolumePermission",
        type: "tns:CreateVolumePermissionOperationType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeModifySnapshotAttributeType;
Modeler.register(TypeModifySnapshotAttributeType, "TypeModifySnapshotAttributeType");
