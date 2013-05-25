var Modeler = require("../Modeler.js");
var className = 'ElementAttachVpnGateway';

var ElementAttachVpnGateway = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AttachVpnGateway: {
      type: "TypeAttachVpnGatewayType",
      wsdlDefinition: {
        name: "AttachVpnGateway",
        type: "tns:AttachVpnGatewayType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAttachVpnGateway;
Modeler.register(ElementAttachVpnGateway, "ElementAttachVpnGateway");
