var Modeler = require("../Modeler.js");
var className = 'TypeDeleteInternetGatewayType';

var TypeDeleteInternetGatewayType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  internetGatewayId: {
      type: "string",
      wsdlDefinition: {
        name: "internetGatewayId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDeleteInternetGatewayType;
Modeler.register(TypeDeleteInternetGatewayType, "TypeDeleteInternetGatewayType");
