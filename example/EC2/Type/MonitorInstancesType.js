var Modeler = require("../Modeler.js");
var className = 'TypeMonitorInstancesType';

var TypeMonitorInstancesType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  instancesSet: {
      type: "TypeMonitorInstancesSetType",
      wsdlDefinition: {
        name: "instancesSet",
        type: "tns:MonitorInstancesSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeMonitorInstancesType;
Modeler.register(TypeMonitorInstancesType, "TypeMonitorInstancesType");
