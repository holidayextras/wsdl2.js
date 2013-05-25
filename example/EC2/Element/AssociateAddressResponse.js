var Modeler = require("../Modeler.js");
var className = 'ElementAssociateAddressResponse';

var ElementAssociateAddressResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AssociateAddressResponse: {
      type: "TypeAssociateAddressResponseType",
      wsdlDefinition: {
        name: "AssociateAddressResponse",
        type: "tns:AssociateAddressResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAssociateAddressResponse;
Modeler.register(ElementAssociateAddressResponse, "ElementAssociateAddressResponse");
