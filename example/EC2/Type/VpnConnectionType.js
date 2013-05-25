var Modeler = require("../Modeler.js");
var className = 'TypeVpnConnectionType';

var TypeVpnConnectionType = function(json, parentObj) {
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
    state: {
      type: "string",
      wsdlDefinition: {
        name: "state",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    customerGatewayConfiguration: {
      type: "string",
      wsdlDefinition: {
        name: "customerGatewayConfiguration",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    type: {
      type: "string",
      wsdlDefinition: {
        name: "type",
        type: "xs:string",
        minOccurs: 0
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
    tagSet: {
      type: "TypeResourceTagSetType",
      wsdlDefinition: {
        name: "tagSet",
        type: "tns:ResourceTagSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    vgwTelemetry: {
      type: "TypeVgwTelemetryType",
      wsdlDefinition: {
        name: "vgwTelemetry",
        type: "tns:VgwTelemetryType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    options: {
      type: "TypeVpnConnectionOptionsResponseType",
      wsdlDefinition: {
        name: "options",
        type: "tns:VpnConnectionOptionsResponseType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    routes: {
      type: "TypeVpnStaticRoutesSetType",
      wsdlDefinition: {
        name: "routes",
        type: "tns:VpnStaticRoutesSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVpnConnectionType;
Modeler.register(TypeVpnConnectionType, "TypeVpnConnectionType");
