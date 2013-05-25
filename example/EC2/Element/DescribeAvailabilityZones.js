var Modeler = require("../Modeler.js");
var className = 'ElementDescribeAvailabilityZones';

var ElementDescribeAvailabilityZones = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeAvailabilityZones: {
      type: "TypeDescribeAvailabilityZonesType",
      wsdlDefinition: {
        name: "DescribeAvailabilityZones",
        type: "tns:DescribeAvailabilityZonesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeAvailabilityZones;
Modeler.register(ElementDescribeAvailabilityZones, "ElementDescribeAvailabilityZones");
