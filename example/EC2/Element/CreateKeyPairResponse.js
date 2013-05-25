var Modeler = require("../Modeler.js");
var className = 'ElementCreateKeyPairResponse';

var ElementCreateKeyPairResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateKeyPairResponse: {
      type: "TypeCreateKeyPairResponseType",
      wsdlDefinition: {
        name: "CreateKeyPairResponse",
        type: "tns:CreateKeyPairResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateKeyPairResponse;
Modeler.register(ElementCreateKeyPairResponse, "ElementCreateKeyPairResponse");
