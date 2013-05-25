var Modeler = require("../Modeler.js");
var className = 'TypeDescribeAvailabilityZonesSetItemType';

var TypeDescribeAvailabilityZonesSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  zoneName: {
      type: "string",
      wsdlDefinition: {
        name: "zoneName",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeAvailabilityZonesSetItemType;
Modeler.register(TypeDescribeAvailabilityZonesSetItemType, "TypeDescribeAvailabilityZonesSetItemType");
