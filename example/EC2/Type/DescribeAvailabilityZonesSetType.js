var Modeler = require("../Modeler.js");
var className = 'TypeDescribeAvailabilityZonesSetType';

var TypeDescribeAvailabilityZonesSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeAvailabilityZonesSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeAvailabilityZonesSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeAvailabilityZonesSetType;
Modeler.register(TypeDescribeAvailabilityZonesSetType, "TypeDescribeAvailabilityZonesSetType");
