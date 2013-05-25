var Modeler = require("../Modeler.js");
var className = 'TypeVgwTelemetryType';

var TypeVgwTelemetryType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeVpnTunnelTelemetryType",
      wsdlDefinition: {
        name: "item",
        type: "tns:VpnTunnelTelemetryType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVgwTelemetryType;
Modeler.register(TypeVgwTelemetryType, "TypeVgwTelemetryType");
