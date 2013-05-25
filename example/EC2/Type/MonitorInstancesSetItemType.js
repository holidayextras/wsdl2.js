var Modeler = require("../Modeler.js");
var className = 'TypeMonitorInstancesSetItemType';

var TypeMonitorInstancesSetItemType = function(json, parentObj) {
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
    }
	}, parentObj, json);
};

module.exports = TypeMonitorInstancesSetItemType;
Modeler.register(TypeMonitorInstancesSetItemType, "TypeMonitorInstancesSetItemType");
