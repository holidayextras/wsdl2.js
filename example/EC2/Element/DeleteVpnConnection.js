var Modeler = require("../Modeler.js");
var className = 'ElementDeleteVpnConnection';

var ElementDeleteVpnConnection = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteVpnConnection: {
      type: "TypeDeleteVpnConnectionType",
      wsdlDefinition: {
        name: "DeleteVpnConnection",
        type: "tns:DeleteVpnConnectionType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteVpnConnection;
Modeler.register(ElementDeleteVpnConnection, "ElementDeleteVpnConnection");
