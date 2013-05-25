var Modeler = require("../Modeler.js");
var className = 'ElementDeleteKeyPairResponse';

var ElementDeleteKeyPairResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteKeyPairResponse: {
      type: "TypeDeleteKeyPairResponseType",
      wsdlDefinition: {
        name: "DeleteKeyPairResponse",
        type: "tns:DeleteKeyPairResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteKeyPairResponse;
Modeler.register(ElementDeleteKeyPairResponse, "ElementDeleteKeyPairResponse");
