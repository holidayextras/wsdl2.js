var Modeler = require("../Modeler.js");
var className = 'ElementDetachInternetGateway';

var ElementDetachInternetGateway = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DetachInternetGateway: {
      type: "TypeDetachInternetGatewayType",
      wsdlDefinition: {
        name: "DetachInternetGateway",
        type: "tns:DetachInternetGatewayType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDetachInternetGateway;
Modeler.register(ElementDetachInternetGateway, "ElementDetachInternetGateway");
