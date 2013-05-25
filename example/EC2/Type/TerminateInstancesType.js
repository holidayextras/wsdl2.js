var Modeler = require("../Modeler.js");
var className = 'TypeTerminateInstancesType';

var TypeTerminateInstancesType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  instancesSet: {
      type: "TypeInstanceIdSetType",
      wsdlDefinition: {
        name: "instancesSet",
        type: "tns:InstanceIdSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeTerminateInstancesType;
Modeler.register(TypeTerminateInstancesType, "TypeTerminateInstancesType");
