var Modeler = require("../Modeler.js");
var className = 'TypeAvailabilityZoneSetType';

var TypeAvailabilityZoneSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeAvailabilityZoneItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:AvailabilityZoneItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAvailabilityZoneSetType;
Modeler.register(TypeAvailabilityZoneSetType, "TypeAvailabilityZoneSetType");
