var Modeler = require("../Modeler.js");
var className = 'TypeDeleteRouteTableType';

var TypeDeleteRouteTableType = function(json, parentObj) {
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
    }
	}, parentObj, json);
};

module.exports = TypeDeleteRouteTableType;
Modeler.register(TypeDeleteRouteTableType, "TypeDeleteRouteTableType");
