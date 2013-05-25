var Modeler = require("../Modeler.js");
var className = 'ElementAttachInternetGateway';

var ElementAttachInternetGateway = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AttachInternetGateway: {
      type: "TypeAttachInternetGatewayType",
      wsdlDefinition: {
        name: "AttachInternetGateway",
        type: "tns:AttachInternetGatewayType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAttachInternetGateway;
Modeler.register(ElementAttachInternetGateway, "ElementAttachInternetGateway");
