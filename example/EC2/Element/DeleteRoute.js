var Modeler = require("../Modeler.js");
var className = 'ElementDeleteRoute';

var ElementDeleteRoute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteRoute: {
      type: "TypeDeleteRouteType",
      wsdlDefinition: {
        name: "DeleteRoute",
        type: "tns:DeleteRouteType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteRoute;
Modeler.register(ElementDeleteRoute, "ElementDeleteRoute");
