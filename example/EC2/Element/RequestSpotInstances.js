var Modeler = require("../Modeler.js");
var className = 'ElementRequestSpotInstances';

var ElementRequestSpotInstances = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  RequestSpotInstances: {
      type: "TypeRequestSpotInstancesType",
      wsdlDefinition: {
        name: "RequestSpotInstances",
        type: "tns:RequestSpotInstancesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequestSpotInstances;
Modeler.register(ElementRequestSpotInstances, "ElementRequestSpotInstances");
