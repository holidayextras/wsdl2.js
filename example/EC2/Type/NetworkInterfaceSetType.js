var Modeler = require("../Modeler.js");
var className = 'TypeNetworkInterfaceSetType';

var TypeNetworkInterfaceSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeNetworkInterfaceType",
      wsdlDefinition: {
        name: "item",
        type: "tns:NetworkInterfaceType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeNetworkInterfaceSetType;
Modeler.register(TypeNetworkInterfaceSetType, "TypeNetworkInterfaceSetType");
