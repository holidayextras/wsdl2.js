var Modeler = require("../Modeler.js");
var className = 'ElementAllocateAddressResponse';

var ElementAllocateAddressResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AllocateAddressResponse: {
      type: "TypeAllocateAddressResponseType",
      wsdlDefinition: {
        name: "AllocateAddressResponse",
        type: "tns:AllocateAddressResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAllocateAddressResponse;
Modeler.register(ElementAllocateAddressResponse, "ElementAllocateAddressResponse");
