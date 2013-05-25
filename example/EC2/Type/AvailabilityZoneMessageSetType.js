var Modeler = require("../Modeler.js");
var className = 'TypeAvailabilityZoneMessageSetType';

var TypeAvailabilityZoneMessageSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeAvailabilityZoneMessageType",
      wsdlDefinition: {
        name: "item",
        type: "tns:AvailabilityZoneMessageType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAvailabilityZoneMessageSetType;
Modeler.register(TypeAvailabilityZoneMessageSetType, "TypeAvailabilityZoneMessageSetType");
