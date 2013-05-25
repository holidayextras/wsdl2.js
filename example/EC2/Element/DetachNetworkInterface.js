var Modeler = require("../Modeler.js");
var className = 'ElementDetachNetworkInterface';

var ElementDetachNetworkInterface = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DetachNetworkInterface: {
      type: "TypeDetachNetworkInterfaceType",
      wsdlDefinition: {
        name: "DetachNetworkInterface",
        type: "tns:DetachNetworkInterfaceType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDetachNetworkInterface;
Modeler.register(ElementDetachNetworkInterface, "ElementDetachNetworkInterface");
