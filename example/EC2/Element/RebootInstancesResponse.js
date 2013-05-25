var Modeler = require("../Modeler.js");
var className = 'ElementRebootInstancesResponse';

var ElementRebootInstancesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  RebootInstancesResponse: {
      type: "TypeRebootInstancesResponseType",
      wsdlDefinition: {
        name: "RebootInstancesResponse",
        type: "tns:RebootInstancesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRebootInstancesResponse;
Modeler.register(ElementRebootInstancesResponse, "ElementRebootInstancesResponse");
