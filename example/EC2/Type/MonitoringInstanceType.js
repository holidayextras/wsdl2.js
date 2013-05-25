var Modeler = require("../Modeler.js");
var className = 'TypeMonitoringInstanceType';

var TypeMonitoringInstanceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  enabled: {
      type: "boolean",
      wsdlDefinition: {
        name: "enabled",
        type: "xs:boolean",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeMonitoringInstanceType;
Modeler.register(TypeMonitoringInstanceType, "TypeMonitoringInstanceType");
