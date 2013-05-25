var Modeler = require("../Modeler.js");
var className = 'TypeCreateRouteTableResponseType';

var TypeCreateRouteTableResponseType = function(json, parentObj) {
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
    routeTable: {
      type: "TypeRouteTableType",
      wsdlDefinition: {
        name: "routeTable",
        type: "tns:RouteTableType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateRouteTableResponseType;
Modeler.register(TypeCreateRouteTableResponseType, "TypeCreateRouteTableResponseType");
