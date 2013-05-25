var Modeler = require("../Modeler.js");
var className = 'TypeCreateVpnConnectionResponseType';

var TypeCreateVpnConnectionResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    vpnConnection: {
      type: "TypeVpnConnectionType",
      wsdlDefinition: {
        name: "vpnConnection",
        type: "tns:VpnConnectionType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateVpnConnectionResponseType;
Modeler.register(TypeCreateVpnConnectionResponseType, "TypeCreateVpnConnectionResponseType");
