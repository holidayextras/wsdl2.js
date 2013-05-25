var Modeler = require("../Modeler.js");
var className = 'TypeReplaceRouteTableAssociationType';

var TypeReplaceRouteTableAssociationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  associationId: {
      type: "string",
      wsdlDefinition: {
        name: "associationId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
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

module.exports = TypeReplaceRouteTableAssociationType;
Modeler.register(TypeReplaceRouteTableAssociationType, "TypeReplaceRouteTableAssociationType");
