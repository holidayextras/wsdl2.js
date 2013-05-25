var Modeler = require("../Modeler.js");
var className = 'TypeMonitorInstancesResponseSetType';

var TypeMonitorInstancesResponseSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeMonitorInstancesResponseSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:MonitorInstancesResponseSetItemType",
        minOccurs: 1,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: true
    }
	}, parentObj, json);
};

module.exports = TypeMonitorInstancesResponseSetType;
Modeler.register(TypeMonitorInstancesResponseSetType, "TypeMonitorInstancesResponseSetType");
