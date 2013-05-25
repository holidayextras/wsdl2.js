var Modeler = require("../Modeler.js");
var className = 'ElementRunInstancesResponse';

var ElementRunInstancesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  RunInstancesResponse: {
      type: "TypeRunInstancesResponseType",
      wsdlDefinition: {
        name: "RunInstancesResponse",
        type: "tns:RunInstancesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRunInstancesResponse;
Modeler.register(ElementRunInstancesResponse, "ElementRunInstancesResponse");
