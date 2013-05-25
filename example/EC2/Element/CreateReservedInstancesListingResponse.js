var Modeler = require("../Modeler.js");
var className = 'ElementCreateReservedInstancesListingResponse';

var ElementCreateReservedInstancesListingResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateReservedInstancesListingResponse: {
      type: "TypeCreateReservedInstancesListingResponseType",
      wsdlDefinition: {
        name: "CreateReservedInstancesListingResponse",
        type: "tns:CreateReservedInstancesListingResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateReservedInstancesListingResponse;
Modeler.register(ElementCreateReservedInstancesListingResponse, "ElementCreateReservedInstancesListingResponse");
