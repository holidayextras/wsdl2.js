var Modeler = require("../Modeler.js");
var className = 'TypeDescribeInstancesResponseType';

var TypeDescribeInstancesResponseType = function(json, parentObj) {
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
    reservationSet: {
      type: "TypeReservationSetType",
      wsdlDefinition: {
        name: "reservationSet",
        type: "tns:ReservationSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeInstancesResponseType;
Modeler.register(TypeDescribeInstancesResponseType, "TypeDescribeInstancesResponseType");
