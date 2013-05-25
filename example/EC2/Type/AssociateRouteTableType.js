var Modeler = require("../Modeler.js");
var className = 'TypeAssociateRouteTableType';

var TypeAssociateRouteTableType = function(json, parentObj) {
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
    subnetId: {
      type: "string",
      wsdlDefinition: {
        name: "subnetId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAssociateRouteTableType;
Modeler.register(TypeAssociateRouteTableType, "TypeAssociateRouteTableType");
