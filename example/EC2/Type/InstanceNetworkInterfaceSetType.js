var Modeler = require("../Modeler.js");
var className = 'TypeInstanceNetworkInterfaceSetType';

var TypeInstanceNetworkInterfaceSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeInstanceNetworkInterfaceSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:InstanceNetworkInterfaceSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceNetworkInterfaceSetType;
Modeler.register(TypeInstanceNetworkInterfaceSetType, "TypeInstanceNetworkInterfaceSetType");
