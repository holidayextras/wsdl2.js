var Modeler = require("../Modeler.js");
var className = 'ElementCreateInternetGateway';

var ElementCreateInternetGateway = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateInternetGateway: {
      type: "TypeCreateInternetGatewayType",
      wsdlDefinition: {
        name: "CreateInternetGateway",
        type: "tns:CreateInternetGatewayType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateInternetGateway;
Modeler.register(ElementCreateInternetGateway, "ElementCreateInternetGateway");
