var Modeler = require("../Modeler.js");
var className = 'TypeDisassociateAddressType';

var TypeDisassociateAddressType = function(json, parentObj) {
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
    associationId: {
      type: "string",
      wsdlDefinition: {
        name: "associationId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDisassociateAddressType;
Modeler.register(TypeDisassociateAddressType, "TypeDisassociateAddressType");
