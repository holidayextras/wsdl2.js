var Modeler = require("../Modeler.js");
var className = 'TypeAssociateRouteTableResponseType';

var TypeAssociateRouteTableResponseType = function(json, parentObj) {
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
    associationId: {
      type: "string",
      wsdlDefinition: {
        name: "associationId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAssociateRouteTableResponseType;
Modeler.register(TypeAssociateRouteTableResponseType, "TypeAssociateRouteTableResponseType");
