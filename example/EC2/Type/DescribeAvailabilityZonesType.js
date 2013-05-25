var Modeler = require("../Modeler.js");
var className = 'TypeDescribeAvailabilityZonesType';

var TypeDescribeAvailabilityZonesType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  availabilityZoneSet: {
      type: "TypeDescribeAvailabilityZonesSetType",
      wsdlDefinition: {
        name: "availabilityZoneSet",
        type: "tns:DescribeAvailabilityZonesSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    filterSet: {
      type: "TypeFilterSetType",
      wsdlDefinition: {
        name: "filterSet",
        type: "tns:FilterSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeAvailabilityZonesType;
Modeler.register(TypeDescribeAvailabilityZonesType, "TypeDescribeAvailabilityZonesType");
