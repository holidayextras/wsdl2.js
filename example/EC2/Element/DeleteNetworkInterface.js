var Modeler = require("../Modeler.js");
var className = 'ElementDeleteNetworkInterface';

var ElementDeleteNetworkInterface = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteNetworkInterface: {
      type: "TypeDeleteNetworkInterfaceType",
      wsdlDefinition: {
        name: "DeleteNetworkInterface",
        type: "tns:DeleteNetworkInterfaceType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteNetworkInterface;
Modeler.register(ElementDeleteNetworkInterface, "ElementDeleteNetworkInterface");
