var Modeler = require("../Modeler.js");
var className = 'TypePropagatingVgwType';

var TypePropagatingVgwType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  gatewayId: {
      type: "string",
      wsdlDefinition: {
        name: "gatewayId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePropagatingVgwType;
Modeler.register(TypePropagatingVgwType, "TypePropagatingVgwType");
