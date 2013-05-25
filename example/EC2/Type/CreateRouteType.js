var Modeler = require("../Modeler.js");
var className = 'TypeCreateRouteType';

var TypeCreateRouteType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  gatewayId: {
      type: "string",
      wsdlDefinition: {
        name: "gatewayId",
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

module.exports = TypeCreateRouteType;
Modeler.register(TypeCreateRouteType, "TypeCreateRouteType");
