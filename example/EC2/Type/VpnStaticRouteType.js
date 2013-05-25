var Modeler = require("../Modeler.js");
var className = 'TypeVpnStaticRouteType';

var TypeVpnStaticRouteType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  destinationCidrBlock: {
      type: "string",
      wsdlDefinition: {
        name: "destinationCidrBlock",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    source: {
      type: "string",
      wsdlDefinition: {
        name: "source",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    state: {
      type: "string",
      wsdlDefinition: {
        name: "state",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVpnStaticRouteType;
Modeler.register(TypeVpnStaticRouteType, "TypeVpnStaticRouteType");
