var Modeler = require("../Modeler.js");
var className = 'TypeLaunchPermissionListType';

var TypeLaunchPermissionListType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeLaunchPermissionItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:LaunchPermissionItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeLaunchPermissionListType;
Modeler.register(TypeLaunchPermissionListType, "TypeLaunchPermissionListType");
