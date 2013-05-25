var Modeler = require("../Modeler.js");
var className = 'ElementStopInstances';

var ElementStopInstances = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  StopInstances: {
      type: "TypeStopInstancesType",
      wsdlDefinition: {
        name: "StopInstances",
        type: "tns:StopInstancesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementStopInstances;
Modeler.register(ElementStopInstances, "ElementStopInstances");
