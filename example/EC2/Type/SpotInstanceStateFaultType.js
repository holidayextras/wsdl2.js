var Modeler = require("../Modeler.js");
var className = 'TypeSpotInstanceStateFaultType';

var TypeSpotInstanceStateFaultType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  code: {
      type: "string",
      wsdlDefinition: {
        name: "code",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    message: {
      type: "string",
      wsdlDefinition: {
        name: "message",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSpotInstanceStateFaultType;
Modeler.register(TypeSpotInstanceStateFaultType, "TypeSpotInstanceStateFaultType");
