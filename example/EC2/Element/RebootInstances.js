var Modeler = require("../Modeler.js");
var className = 'ElementRebootInstances';

var ElementRebootInstances = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  RebootInstances: {
      type: "TypeRebootInstancesType",
      wsdlDefinition: {
        name: "RebootInstances",
        type: "tns:RebootInstancesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRebootInstances;
Modeler.register(ElementRebootInstances, "ElementRebootInstances");
