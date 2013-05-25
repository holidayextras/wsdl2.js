var Modeler = require("../Modeler.js");
var className = 'ElementImportKeyPair';

var ElementImportKeyPair = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ImportKeyPair: {
      type: "TypeImportKeyPairType",
      wsdlDefinition: {
        name: "ImportKeyPair",
        type: "tns:ImportKeyPairType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementImportKeyPair;
Modeler.register(ElementImportKeyPair, "ElementImportKeyPair");
