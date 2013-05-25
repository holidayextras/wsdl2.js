var Modeler = require("../Modeler.js");
var className = 'TypeCreateKeyPairType';

var TypeCreateKeyPairType = function(json, parentObj) {
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
    }
	}, parentObj, json);
};

module.exports = TypeCreateKeyPairType;
Modeler.register(TypeCreateKeyPairType, "TypeCreateKeyPairType");
