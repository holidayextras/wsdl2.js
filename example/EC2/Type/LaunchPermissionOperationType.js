var Modeler = require("../Modeler.js");
var className = 'TypeLaunchPermissionOperationType';

var TypeLaunchPermissionOperationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  add: {
      type: "TypeLaunchPermissionListType",
      wsdlDefinition: {
        name: "add",
        type: "tns:LaunchPermissionListType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    remove: {
      type: "TypeLaunchPermissionListType",
      wsdlDefinition: {
        name: "remove",
        type: "tns:LaunchPermissionListType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeLaunchPermissionOperationType;
Modeler.register(TypeLaunchPermissionOperationType, "TypeLaunchPermissionOperationType");
