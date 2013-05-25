var Modeler = require("../Modeler.js");
var className = 'ElementAllocateAddress';

var ElementAllocateAddress = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AllocateAddress: {
      type: "TypeAllocateAddressType",
      wsdlDefinition: {
        name: "AllocateAddress",
        type: "tns:AllocateAddressType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAllocateAddress;
Modeler.register(ElementAllocateAddress, "ElementAllocateAddress");
