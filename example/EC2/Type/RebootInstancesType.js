var Modeler = require("../Modeler.js");
var className = 'TypeRebootInstancesType';

var TypeRebootInstancesType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  instancesSet: {
      type: "TypeRebootInstancesInfoType",
      wsdlDefinition: {
        name: "instancesSet",
        type: "tns:RebootInstancesInfoType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRebootInstancesType;
Modeler.register(TypeRebootInstancesType, "TypeRebootInstancesType");
