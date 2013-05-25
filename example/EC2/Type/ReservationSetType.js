var Modeler = require("../Modeler.js");
var className = 'TypeReservationSetType';

var TypeReservationSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeReservationInfoType",
      wsdlDefinition: {
        name: "item",
        type: "tns:ReservationInfoType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeReservationSetType;
Modeler.register(TypeReservationSetType, "TypeReservationSetType");
