var Modeler = require("../Modeler.js");
var className = 'TypeCreateInternetGatewayType';

var TypeCreateInternetGatewayType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateInternetGatewayType: {
      type: "string",
      wsdlDefinition: {
        name: "CreateInternetGatewayType",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateInternetGatewayType;
Modeler.register(TypeCreateInternetGatewayType, "TypeCreateInternetGatewayType");
