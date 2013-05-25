var Modeler = require("../Modeler.js");
var className = 'TypeUnavailableResultType';

var TypeUnavailableResultType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  availabilityZone: {
      type: "string",
      wsdlDefinition: {
        name: "availabilityZone",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeUnavailableResultType;
Modeler.register(TypeUnavailableResultType, "TypeUnavailableResultType");
