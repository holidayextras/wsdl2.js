var Modeler = require("../Modeler.js");
var className = 'ElementImportKeyPairResponse';

var ElementImportKeyPairResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ImportKeyPairResponse: {
      type: "TypeImportKeyPairResponseType",
      wsdlDefinition: {
        name: "ImportKeyPairResponse",
        type: "tns:ImportKeyPairResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementImportKeyPairResponse;
Modeler.register(ElementImportKeyPairResponse, "ElementImportKeyPairResponse");
