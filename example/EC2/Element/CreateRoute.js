var Modeler = require("../Modeler.js");
var className = 'ElementCreateRoute';

var ElementCreateRoute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateRoute: {
      type: "TypeCreateRouteType",
      wsdlDefinition: {
        name: "CreateRoute",
        type: "tns:CreateRouteType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateRoute;
Modeler.register(ElementCreateRoute, "ElementCreateRoute");
