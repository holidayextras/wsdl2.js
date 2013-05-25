var Modeler = require("../Modeler.js");
var className = 'ElementUnmonitorInstances';

var ElementUnmonitorInstances = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  UnmonitorInstances: {
      type: "TypeMonitorInstancesType",
      wsdlDefinition: {
        name: "UnmonitorInstances",
        type: "tns:MonitorInstancesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUnmonitorInstances;
Modeler.register(ElementUnmonitorInstances, "ElementUnmonitorInstances");
