var Modeler = require("../Modeler.js");
var className = 'ElementAssociateAddress';

var ElementAssociateAddress = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AssociateAddress: {
      type: "TypeAssociateAddressType",
      wsdlDefinition: {
        name: "AssociateAddress",
        type: "tns:AssociateAddressType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAssociateAddress;
Modeler.register(ElementAssociateAddress, "ElementAssociateAddress");
