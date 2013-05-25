var Modeler = require("../Modeler.js");
var className = 'TypeCreateReservedInstancesListingType';

var TypeCreateReservedInstancesListingType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  reservedInstancesId: {
      type: "string",
      wsdlDefinition: {
        name: "reservedInstancesId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceCount: {
      type: "number",
      wsdlDefinition: {
        name: "instanceCount",
        type: "xs:int",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    priceSchedules: {
      type: "TypePriceScheduleRequestSetType",
      wsdlDefinition: {
        name: "priceSchedules",
        type: "tns:PriceScheduleRequestSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    clientToken: {
      type: "string",
      wsdlDefinition: {
        name: "clientToken",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateReservedInstancesListingType;
Modeler.register(TypeCreateReservedInstancesListingType, "TypeCreateReservedInstancesListingType");
