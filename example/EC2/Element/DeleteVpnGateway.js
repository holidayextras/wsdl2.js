var Modeler = require("../Modeler.js");
var className = 'ElementDeleteVpnGateway';

var ElementDeleteVpnGateway = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteVpnGateway: {
      type: "TypeDeleteVpnGatewayType",
      wsdlDefinition: {
        name: "DeleteVpnGateway",
        type: "tns:DeleteVpnGatewayType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteVpnGateway;
Modeler.register(ElementDeleteVpnGateway, "ElementDeleteVpnGateway");
