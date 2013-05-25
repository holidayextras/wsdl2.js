var Modeler = require("../Modeler.js");
var className = 'TypeVpnTunnelTelemetryType';

var TypeVpnTunnelTelemetryType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  outsideIpAddress: {
      type: "string",
      wsdlDefinition: {
        name: "outsideIpAddress",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    status: {
      type: "string",
      wsdlDefinition: {
        name: "status",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    lastStatusChange: {
      type: "date",
      wsdlDefinition: {
        name: "lastStatusChange",
        type: "xs:dateTime"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    statusMessage: {
      type: "string",
      wsdlDefinition: {
        name: "statusMessage",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    acceptedRouteCount: {
      type: "number",
      wsdlDefinition: {
        name: "acceptedRouteCount",
        type: "xs:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVpnTunnelTelemetryType;
Modeler.register(TypeVpnTunnelTelemetryType, "TypeVpnTunnelTelemetryType");
