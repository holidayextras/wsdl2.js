var Modeler = require("../Modeler.js");
var className = 'ElementRequestSpotInstancesResponse';

var ElementRequestSpotInstancesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  RequestSpotInstancesResponse: {
      type: "TypeRequestSpotInstancesResponseType",
      wsdlDefinition: {
        name: "RequestSpotInstancesResponse",
        type: "tns:RequestSpotInstancesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequestSpotInstancesResponse;
Modeler.register(ElementRequestSpotInstancesResponse, "ElementRequestSpotInstancesResponse");
