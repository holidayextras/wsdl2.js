var Modeler = require("../Modeler.js");
var className = 'TypeDescribeAvailabilityZonesResponseType';

var TypeDescribeAvailabilityZonesResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    availabilityZoneInfo: {
      type: "TypeAvailabilityZoneSetType",
      wsdlDefinition: {
        name: "availabilityZoneInfo",
        type: "tns:AvailabilityZoneSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeAvailabilityZonesResponseType;
Modeler.register(TypeDescribeAvailabilityZonesResponseType, "TypeDescribeAvailabilityZonesResponseType");
