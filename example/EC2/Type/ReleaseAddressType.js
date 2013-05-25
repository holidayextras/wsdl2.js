var Modeler = require("../Modeler.js");
var className = 'TypeReleaseAddressType';

var TypeReleaseAddressType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  publicIp: {
      type: "string",
      wsdlDefinition: {
        name: "publicIp",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    allocationId: {
      type: "string",
      wsdlDefinition: {
        name: "allocationId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeReleaseAddressType;
Modeler.register(TypeReleaseAddressType, "TypeReleaseAddressType");
