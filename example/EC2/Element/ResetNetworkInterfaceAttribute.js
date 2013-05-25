var Modeler = require("../Modeler.js");
var className = 'ElementResetNetworkInterfaceAttribute';

var ElementResetNetworkInterfaceAttribute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ResetNetworkInterfaceAttribute: {
      type: "TypeResetNetworkInterfaceAttributeType",
      wsdlDefinition: {
        name: "ResetNetworkInterfaceAttribute",
        type: "tns:ResetNetworkInterfaceAttributeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementResetNetworkInterfaceAttribute;
Modeler.register(ElementResetNetworkInterfaceAttribute, "ElementResetNetworkInterfaceAttribute");
