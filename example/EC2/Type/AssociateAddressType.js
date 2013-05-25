var Modeler = require("../Modeler.js");
var className = 'TypeAssociateAddressType';

var TypeAssociateAddressType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  undefined: {
      type: "string",
      wsdlDefinition: {
        "xs:element": [
          {
            name: "networkInterfaceId",
            type: "xs:string"
          },
          {
            name: "instanceId",
            type: "xs:string"
          }
        ],
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAssociateAddressType;
Modeler.register(TypeAssociateAddressType, "TypeAssociateAddressType");
