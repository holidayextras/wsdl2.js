var Modeler = require("../Modeler.js");
var className = 'ElementRunInstances';

var ElementRunInstances = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  RunInstances: {
      type: "TypeRunInstancesType",
      wsdlDefinition: {
        name: "RunInstances",
        type: "tns:RunInstancesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRunInstances;
Modeler.register(ElementRunInstances, "ElementRunInstances");
