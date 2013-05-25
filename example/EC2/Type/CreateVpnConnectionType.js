var Modeler = require("../Modeler.js");
var className = 'TypeCreateVpnConnectionType';

var TypeCreateVpnConnectionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  type: {
      type: "string",
      wsdlDefinition: {
        name: "type",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    customerGatewayId: {
      type: "string",
      wsdlDefinition: {
        name: "customerGatewayId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    vpnGatewayId: {
      type: "string",
      wsdlDefinition: {
        name: "vpnGatewayId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    options: {
      type: "TypeVpnConnectionOptionsRequestType",
      wsdlDefinition: {
        name: "options",
        type: "tns:VpnConnectionOptionsRequestType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateVpnConnectionType;
Modeler.register(TypeCreateVpnConnectionType, "TypeCreateVpnConnectionType");
