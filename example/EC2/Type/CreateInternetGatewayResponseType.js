var Modeler = require("../Modeler.js");
var className = 'TypeCreateInternetGatewayResponseType';

var TypeCreateInternetGatewayResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    internetGateway: {
      type: "TypeInternetGatewayType",
      wsdlDefinition: {
        name: "internetGateway",
        type: "tns:InternetGatewayType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateInternetGatewayResponseType;
Modeler.register(TypeCreateInternetGatewayResponseType, "TypeCreateInternetGatewayResponseType");
