var Modeler = require("../Modeler.js");
var className = 'TypePrivateIpAddressesSetItemRequestType';

var TypePrivateIpAddressesSetItemRequestType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  privateIpAddress: {
      type: "string",
      wsdlDefinition: {
        name: "privateIpAddress",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    primary: {
      type: "boolean",
      wsdlDefinition: {
        name: "primary",
        type: "xs:boolean",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePrivateIpAddressesSetItemRequestType;
Modeler.register(TypePrivateIpAddressesSetItemRequestType, "TypePrivateIpAddressesSetItemRequestType");
