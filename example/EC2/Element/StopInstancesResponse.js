var Modeler = require("../Modeler.js");
var className = 'ElementStopInstancesResponse';

var ElementStopInstancesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  StopInstancesResponse: {
      type: "TypeStopInstancesResponseType",
      wsdlDefinition: {
        name: "StopInstancesResponse",
        type: "tns:StopInstancesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementStopInstancesResponse;
Modeler.register(ElementStopInstancesResponse, "ElementStopInstancesResponse");
