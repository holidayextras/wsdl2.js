var Modeler = require("../Modeler.js");
var className = 'ElementCreateVpnConnectionRouteResponse';

var ElementCreateVpnConnectionRouteResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateVpnConnectionRouteResponse: {
      type: "TypeCreateVpnConnectionRouteResponseType",
      wsdlDefinition: {
        name: "CreateVpnConnectionRouteResponse",
        type: "tns:CreateVpnConnectionRouteResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateVpnConnectionRouteResponse;
Modeler.register(ElementCreateVpnConnectionRouteResponse, "ElementCreateVpnConnectionRouteResponse");
