var Modeler = require("../Modeler.js");
var className = 'TypeAttachNetworkInterfaceType';

var TypeAttachNetworkInterfaceType = function(json, parentObj) {
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
    },
    instanceId: {
      type: "string",
      wsdlDefinition: {
        name: "instanceId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    deviceIndex: {
      type: "number",
      wsdlDefinition: {
        name: "deviceIndex",
        type: "xs:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAttachNetworkInterfaceType;
Modeler.register(TypeAttachNetworkInterfaceType, "TypeAttachNetworkInterfaceType");
