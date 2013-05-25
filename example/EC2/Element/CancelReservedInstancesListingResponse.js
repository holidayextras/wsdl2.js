var Modeler = require("../Modeler.js");
var className = 'ElementCancelReservedInstancesListingResponse';

var ElementCancelReservedInstancesListingResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CancelReservedInstancesListingResponse: {
      type: "TypeCancelReservedInstancesListingResponseType",
      wsdlDefinition: {
        name: "CancelReservedInstancesListingResponse",
        type: "tns:CancelReservedInstancesListingResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCancelReservedInstancesListingResponse;
Modeler.register(ElementCancelReservedInstancesListingResponse, "ElementCancelReservedInstancesListingResponse");
