var Modeler = require("../Modeler.js");
var className = 'TypeDisableVgwRoutePropagationRequestType';

var TypeDisableVgwRoutePropagationRequestType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  routeTableId: {
      type: "string",
      wsdlDefinition: {
        name: "routeTableId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    gatewayId: {
      type: "string",
      wsdlDefinition: {
        name: "gatewayId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDisableVgwRoutePropagationRequestType;
Modeler.register(TypeDisableVgwRoutePropagationRequestType, "TypeDisableVgwRoutePropagationRequestType");
