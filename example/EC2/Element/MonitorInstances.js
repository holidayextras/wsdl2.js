var Modeler = require("../Modeler.js");
var className = 'ElementMonitorInstances';

var ElementMonitorInstances = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  MonitorInstances: {
      type: "TypeMonitorInstancesType",
      wsdlDefinition: {
        name: "MonitorInstances",
        type: "tns:MonitorInstancesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMonitorInstances;
Modeler.register(ElementMonitorInstances, "ElementMonitorInstances");
