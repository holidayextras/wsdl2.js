var Modeler = require("../Modeler.js");
var className = 'TypeDeleteKeyPairType';

var TypeDeleteKeyPairType = function(json, parentObj) {
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

module.exports = TypeDeleteKeyPairType;
Modeler.register(TypeDeleteKeyPairType, "TypeDeleteKeyPairType");
