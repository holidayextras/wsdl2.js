var Modeler = require("../Modeler.js");
var className = 'ElementAttachNetworkInterface';

var ElementAttachNetworkInterface = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AttachNetworkInterface: {
      type: "TypeAttachNetworkInterfaceType",
      wsdlDefinition: {
        name: "AttachNetworkInterface",
        type: "tns:AttachNetworkInterfaceType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAttachNetworkInterface;
Modeler.register(ElementAttachNetworkInterface, "ElementAttachNetworkInterface");
