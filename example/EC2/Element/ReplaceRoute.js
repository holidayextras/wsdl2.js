var Modeler = require("../Modeler.js");
var className = 'ElementReplaceRoute';

var ElementReplaceRoute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ReplaceRoute: {
      type: "TypeReplaceRouteType",
      wsdlDefinition: {
        name: "ReplaceRoute",
        type: "tns:ReplaceRouteType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReplaceRoute;
Modeler.register(ElementReplaceRoute, "ElementReplaceRoute");
