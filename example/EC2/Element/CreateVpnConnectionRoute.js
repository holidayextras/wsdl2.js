var Modeler = require("../Modeler.js");
var className = 'ElementCreateVpnConnectionRoute';

var ElementCreateVpnConnectionRoute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateVpnConnectionRoute: {
      type: "TypeCreateVpnConnectionRouteType",
      wsdlDefinition: {
        name: "CreateVpnConnectionRoute",
        type: "tns:CreateVpnConnectionRouteType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateVpnConnectionRoute;
Modeler.register(ElementCreateVpnConnectionRoute, "ElementCreateVpnConnectionRoute");
