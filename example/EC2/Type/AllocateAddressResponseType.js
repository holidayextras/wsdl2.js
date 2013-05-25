var Modeler = require("../Modeler.js");
var className = 'TypeAllocateAddressResponseType';

var TypeAllocateAddressResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    publicIp: {
      type: "string",
      wsdlDefinition: {
        name: "publicIp",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    domain: {
      type: "string",
      wsdlDefinition: {
        name: "domain",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    allocationId: {
      type: "string",
      wsdlDefinition: {
        name: "allocationId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAllocateAddressResponseType;
Modeler.register(TypeAllocateAddressResponseType, "TypeAllocateAddressResponseType");
