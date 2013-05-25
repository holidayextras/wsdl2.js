var Modeler = require("../Modeler.js");
var className = 'ElementTerminateInstancesResponse';

var ElementTerminateInstancesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  TerminateInstancesResponse: {
      type: "TypeTerminateInstancesResponseType",
      wsdlDefinition: {
        name: "TerminateInstancesResponse",
        type: "tns:TerminateInstancesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTerminateInstancesResponse;
Modeler.register(ElementTerminateInstancesResponse, "ElementTerminateInstancesResponse");
