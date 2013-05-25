var Modeler = require("../Modeler.js");
var className = 'ElementDetachVpnGateway';

var ElementDetachVpnGateway = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DetachVpnGateway: {
      type: "TypeDetachVpnGatewayType",
      wsdlDefinition: {
        name: "DetachVpnGateway",
        type: "tns:DetachVpnGatewayType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDetachVpnGateway;
Modeler.register(ElementDetachVpnGateway, "ElementDetachVpnGateway");
