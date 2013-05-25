var Modeler = require("../Modeler.js");
var className = 'TypeAllocateAddressType';

var TypeAllocateAddressType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  domain: {
      type: "string",
      wsdlDefinition: {
        name: "domain",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAllocateAddressType;
Modeler.register(TypeAllocateAddressType, "TypeAllocateAddressType");
