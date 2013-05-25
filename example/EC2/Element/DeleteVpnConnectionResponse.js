var Modeler = require("../Modeler.js");
var className = 'ElementDeleteVpnConnectionResponse';

var ElementDeleteVpnConnectionResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteVpnConnectionResponse: {
      type: "TypeDeleteVpnConnectionResponseType",
      wsdlDefinition: {
        name: "DeleteVpnConnectionResponse",
        type: "tns:DeleteVpnConnectionResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteVpnConnectionResponse;
Modeler.register(ElementDeleteVpnConnectionResponse, "ElementDeleteVpnConnectionResponse");
