var Modeler = require("../Modeler.js");
var className = 'TypeMonitorInstancesResponseType';

var TypeMonitorInstancesResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instancesSet: {
      type: "TypeMonitorInstancesResponseSetType",
      wsdlDefinition: {
        name: "instancesSet",
        type: "tns:MonitorInstancesResponseSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeMonitorInstancesResponseType;
Modeler.register(TypeMonitorInstancesResponseType, "TypeMonitorInstancesResponseType");
