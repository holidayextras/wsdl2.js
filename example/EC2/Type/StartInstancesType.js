var Modeler = require("../Modeler.js");
var className = 'TypeStartInstancesType';

var TypeStartInstancesType = function(json, parentObj) {
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

module.exports = TypeStartInstancesType;
Modeler.register(TypeStartInstancesType, "TypeStartInstancesType");
