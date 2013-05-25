var Modeler = require("../Modeler.js");
var className = 'ElementMonitorInstancesResponse';

var ElementMonitorInstancesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  MonitorInstancesResponse: {
      type: "TypeMonitorInstancesResponseType",
      wsdlDefinition: {
        name: "MonitorInstancesResponse",
        type: "tns:MonitorInstancesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMonitorInstancesResponse;
Modeler.register(ElementMonitorInstancesResponse, "ElementMonitorInstancesResponse");
