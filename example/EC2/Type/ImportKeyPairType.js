var Modeler = require("../Modeler.js");
var className = 'TypeImportKeyPairType';

var TypeImportKeyPairType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  keyName: {
      type: "string",
      wsdlDefinition: {
        name: "keyName",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    publicKeyMaterial: {
      type: "string",
      wsdlDefinition: {
        name: "publicKeyMaterial",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeImportKeyPairType;
Modeler.register(TypeImportKeyPairType, "TypeImportKeyPairType");
