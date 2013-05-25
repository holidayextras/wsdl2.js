var Modeler = require("../Modeler.js");
var className = 'TypeDeleteRouteType';

var TypeDeleteRouteType = function(json, parentObj) {
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
    destinationCidrBlock: {
      type: "string",
      wsdlDefinition: {
        name: "destinationCidrBlock",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDeleteRouteType;
Modeler.register(TypeDeleteRouteType, "TypeDeleteRouteType");
