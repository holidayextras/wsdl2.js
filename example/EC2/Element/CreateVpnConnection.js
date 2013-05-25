var Modeler = require("../Modeler.js");
var className = 'ElementCreateVpnConnection';

var ElementCreateVpnConnection = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateVpnConnection: {
      type: "TypeCreateVpnConnectionType",
      wsdlDefinition: {
        name: "CreateVpnConnection",
        type: "tns:CreateVpnConnectionType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateVpnConnection;
Modeler.register(ElementCreateVpnConnection, "ElementCreateVpnConnection");
