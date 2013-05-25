var Modeler = require("../Modeler.js");
var className = 'ElementDisassociateAddress';

var ElementDisassociateAddress = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DisassociateAddress: {
      type: "TypeDisassociateAddressType",
      wsdlDefinition: {
        name: "DisassociateAddress",
        type: "tns:DisassociateAddressType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDisassociateAddress;
Modeler.register(ElementDisassociateAddress, "ElementDisassociateAddress");
