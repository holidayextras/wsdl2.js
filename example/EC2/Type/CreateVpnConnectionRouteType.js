var Modeler = require("../Modeler.js");
var className = 'TypeCreateVpnConnectionRouteType';

var TypeCreateVpnConnectionRouteType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  vpnConnectionId: {
      type: "string",
      wsdlDefinition: {
        name: "vpnConnectionId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    destinationCidrBlock: {
      type: "string",
      wsdlDefinition: {
        name: "destinationCidrBlock",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateVpnConnectionRouteType;
Modeler.register(TypeCreateVpnConnectionRouteType, "TypeCreateVpnConnectionRouteType");
