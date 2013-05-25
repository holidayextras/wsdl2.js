var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSnapshotAttributeResponseType';

var TypeDescribeSnapshotAttributeResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  createVolumePermission: {
      type: "TypeCreateVolumePermissionListType",
      wsdlDefinition: {
        name: "createVolumePermission",
        type: "tns:CreateVolumePermissionListType"
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

module.exports = TypeDescribeSnapshotAttributeResponseType;
Modeler.register(TypeDescribeSnapshotAttributeResponseType, "TypeDescribeSnapshotAttributeResponseType");
