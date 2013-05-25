var Modeler = require("../Modeler.js");
var className = 'ElementTerminateInstances';

var ElementTerminateInstances = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  TerminateInstances: {
      type: "TypeTerminateInstancesType",
      wsdlDefinition: {
        name: "TerminateInstances",
        type: "tns:TerminateInstancesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTerminateInstances;
Modeler.register(ElementTerminateInstances, "ElementTerminateInstances");
