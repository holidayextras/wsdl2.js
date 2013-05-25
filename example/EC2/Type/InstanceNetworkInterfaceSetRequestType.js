var Modeler = require("../Modeler.js");
var className = 'TypeInstanceNetworkInterfaceSetRequestType';

var TypeInstanceNetworkInterfaceSetRequestType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeInstanceNetworkInterfaceSetItemRequestType",
      wsdlDefinition: {
        name: "item",
        type: "tns:InstanceNetworkInterfaceSetItemRequestType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceNetworkInterfaceSetRequestType;
Modeler.register(TypeInstanceNetworkInterfaceSetRequestType, "TypeInstanceNetworkInterfaceSetRequestType");
