var Modeler = require("../Modeler.js");
var className = 'TypeDisassociateRouteTableType';

var TypeDisassociateRouteTableType = function(json, parentObj) {
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
    }
	}, parentObj, json);
};

module.exports = TypeDisassociateRouteTableType;
Modeler.register(TypeDisassociateRouteTableType, "TypeDisassociateRouteTableType");
