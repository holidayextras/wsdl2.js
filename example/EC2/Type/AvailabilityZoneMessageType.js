var Modeler = require("../Modeler.js");
var className = 'TypeAvailabilityZoneMessageType';

var TypeAvailabilityZoneMessageType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
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

module.exports = TypeAvailabilityZoneMessageType;
Modeler.register(TypeAvailabilityZoneMessageType, "TypeAvailabilityZoneMessageType");
