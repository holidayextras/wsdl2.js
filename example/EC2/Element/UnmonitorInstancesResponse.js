var Modeler = require("../Modeler.js");
var className = 'ElementUnmonitorInstancesResponse';

var ElementUnmonitorInstancesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  UnmonitorInstancesResponse: {
      type: "TypeMonitorInstancesResponseType",
      wsdlDefinition: {
        name: "UnmonitorInstancesResponse",
        type: "tns:MonitorInstancesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUnmonitorInstancesResponse;
Modeler.register(ElementUnmonitorInstancesResponse, "ElementUnmonitorInstancesResponse");
