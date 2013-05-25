var Modeler = require("../Modeler.js");
var className = 'TypeMonitorInstancesResponseSetItemType';

var TypeMonitorInstancesResponseSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  instanceId: {
      type: "string",
      wsdlDefinition: {
        name: "instanceId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    monitoring: {
      type: "TypeInstanceMonitoringStateType",
      wsdlDefinition: {
        name: "monitoring",
        type: "tns:InstanceMonitoringStateType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeMonitorInstancesResponseSetItemType;
Modeler.register(TypeMonitorInstancesResponseSetItemType, "TypeMonitorInstancesResponseSetItemType");
