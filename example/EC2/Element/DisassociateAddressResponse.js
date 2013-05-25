var Modeler = require("../Modeler.js");
var className = 'ElementDisassociateAddressResponse';

var ElementDisassociateAddressResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DisassociateAddressResponse: {
      type: "TypeDisassociateAddressResponseType",
      wsdlDefinition: {
        name: "DisassociateAddressResponse",
        type: "tns:DisassociateAddressResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDisassociateAddressResponse;
Modeler.register(ElementDisassociateAddressResponse, "ElementDisassociateAddressResponse");
