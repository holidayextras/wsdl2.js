var Modeler = require("../Modeler.js");
var className = 'ElementDeleteInternetGateway';

var ElementDeleteInternetGateway = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteInternetGateway: {
      type: "TypeDeleteInternetGatewayType",
      wsdlDefinition: {
        name: "DeleteInternetGateway",
        type: "tns:DeleteInternetGatewayType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteInternetGateway;
Modeler.register(ElementDeleteInternetGateway, "ElementDeleteInternetGateway");
