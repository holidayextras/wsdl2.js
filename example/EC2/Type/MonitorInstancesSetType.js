var Modeler = require("../Modeler.js");
var className = 'TypeMonitorInstancesSetType';

var TypeMonitorInstancesSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeMonitorInstancesSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:MonitorInstancesSetItemType",
        minOccurs: 1,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: true
    }
	}, parentObj, json);
};

module.exports = TypeMonitorInstancesSetType;
Modeler.register(TypeMonitorInstancesSetType, "TypeMonitorInstancesSetType");
