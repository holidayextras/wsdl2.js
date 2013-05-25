var Modeler = require("../Modeler.js");
var className = 'TypeImportKeyPairResponseType';

var TypeImportKeyPairResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    keyName: {
      type: "string",
      wsdlDefinition: {
        name: "keyName",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    keyFingerprint: {
      type: "string",
      wsdlDefinition: {
        name: "keyFingerprint",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeImportKeyPairResponseType;
Modeler.register(TypeImportKeyPairResponseType, "TypeImportKeyPairResponseType");
