var Modeler = require("../Modeler.js");
var className = 'ElementDeleteVpnConnectionRouteResponse';

var ElementDeleteVpnConnectionRouteResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteVpnConnectionRouteResponse: {
      type: "TypeDeleteVpnConnectionRouteResponseType",
      wsdlDefinition: {
        name: "DeleteVpnConnectionRouteResponse",
        type: "tns:DeleteVpnConnectionRouteResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteVpnConnectionRouteResponse;
Modeler.register(ElementDeleteVpnConnectionRouteResponse, "ElementDeleteVpnConnectionRouteResponse");
