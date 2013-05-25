var Modeler = require("../Modeler.js");
var className = 'ElementCreateVpnGateway';

var ElementCreateVpnGateway = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateVpnGateway: {
      type: "TypeCreateVpnGatewayType",
      wsdlDefinition: {
        name: "CreateVpnGateway",
        type: "tns:CreateVpnGatewayType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateVpnGateway;
Modeler.register(ElementCreateVpnGateway, "ElementCreateVpnGateway");
