var Modeler = require("../Modeler.js");
var className = 'TypeNetworkInterfaceIdSetType';

var TypeNetworkInterfaceIdSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeNetworkInterfaceIdSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:NetworkInterfaceIdSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeNetworkInterfaceIdSetType;
Modeler.register(TypeNetworkInterfaceIdSetType, "TypeNetworkInterfaceIdSetType");
