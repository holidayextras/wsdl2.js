var Modeler = require("../Modeler.js");
var className = 'ElementCreateKeyPair';

var ElementCreateKeyPair = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateKeyPair: {
      type: "TypeCreateKeyPairType",
      wsdlDefinition: {
        name: "CreateKeyPair",
        type: "tns:CreateKeyPairType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateKeyPair;
Modeler.register(ElementCreateKeyPair, "ElementCreateKeyPair");
