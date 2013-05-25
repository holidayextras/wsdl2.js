var Modeler = require("../Modeler.js");
var className = 'ElementDeleteVpnConnectionRoute';

var ElementDeleteVpnConnectionRoute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteVpnConnectionRoute: {
      type: "TypeDeleteVpnConnectionRouteType",
      wsdlDefinition: {
        name: "DeleteVpnConnectionRoute",
        type: "tns:DeleteVpnConnectionRouteType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteVpnConnectionRoute;
Modeler.register(ElementDeleteVpnConnectionRoute, "ElementDeleteVpnConnectionRoute");
