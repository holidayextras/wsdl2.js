var Modeler = require("../Modeler.js");
var className = 'TypeRouteTableAssociationType';

var TypeRouteTableAssociationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  subnetId: {
      type: "string",
      wsdlDefinition: {
        name: "subnetId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    main: {
      type: "boolean",
      wsdlDefinition: {
        name: "main",
        type: "xs:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRouteTableAssociationType;
Modeler.register(TypeRouteTableAssociationType, "TypeRouteTableAssociationType");
