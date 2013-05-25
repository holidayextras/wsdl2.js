var Modeler = require("../Modeler.js");
var className = 'ElementDeleteKeyPair';

var ElementDeleteKeyPair = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteKeyPair: {
      type: "TypeDeleteKeyPairType",
      wsdlDefinition: {
        name: "DeleteKeyPair",
        type: "tns:DeleteKeyPairType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteKeyPair;
Modeler.register(ElementDeleteKeyPair, "ElementDeleteKeyPair");
