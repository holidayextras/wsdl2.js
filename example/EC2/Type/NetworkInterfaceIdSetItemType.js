var Modeler = require("../Modeler.js");
var className = 'TypeNetworkInterfaceIdSetItemType';

var TypeNetworkInterfaceIdSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  networkInterfaceId: {
      type: "string",
      wsdlDefinition: {
        name: "networkInterfaceId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeNetworkInterfaceIdSetItemType;
Modeler.register(TypeNetworkInterfaceIdSetItemType, "TypeNetworkInterfaceIdSetItemType");
