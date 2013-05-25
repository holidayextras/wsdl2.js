var Modeler = require("../Modeler.js");
var className = 'ElementModifyNetworkInterfaceAttribute';

var ElementModifyNetworkInterfaceAttribute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ModifyNetworkInterfaceAttribute: {
      type: "TypeModifyNetworkInterfaceAttributeType",
      wsdlDefinition: {
        name: "ModifyNetworkInterfaceAttribute",
        type: "tns:ModifyNetworkInterfaceAttributeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementModifyNetworkInterfaceAttribute;
Modeler.register(ElementModifyNetworkInterfaceAttribute, "ElementModifyNetworkInterfaceAttribute");
