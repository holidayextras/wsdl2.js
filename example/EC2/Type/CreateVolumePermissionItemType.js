var Modeler = require("../Modeler.js");
var className = 'TypeCreateVolumePermissionItemType';

var TypeCreateVolumePermissionItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  userId: {
      type: "string",
      wsdlDefinition: {
        name: "userId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    group: {
      type: "string",
      wsdlDefinition: {
        name: "group",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateVolumePermissionItemType;
Modeler.register(TypeCreateVolumePermissionItemType, "TypeCreateVolumePermissionItemType");
