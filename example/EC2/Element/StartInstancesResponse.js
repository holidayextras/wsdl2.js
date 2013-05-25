var Modeler = require("../Modeler.js");
var className = 'ElementStartInstancesResponse';

var ElementStartInstancesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  StartInstancesResponse: {
      type: "TypeStartInstancesResponseType",
      wsdlDefinition: {
        name: "StartInstancesResponse",
        type: "tns:StartInstancesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementStartInstancesResponse;
Modeler.register(ElementStartInstancesResponse, "ElementStartInstancesResponse");
