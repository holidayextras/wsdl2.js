var Modeler = require("../Modeler.js");
var className = 'TypeCreateKeyPairResponseType';

var TypeCreateKeyPairResponseType = function(json, parentObj) {
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
    },
    keyMaterial: {
      type: "string",
      wsdlDefinition: {
        name: "keyMaterial",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateKeyPairResponseType;
Modeler.register(TypeCreateKeyPairResponseType, "TypeCreateKeyPairResponseType");
